#!/usr/bin/env python3
"""
Publica um Reels, um carrossel ou uma imagem única no Instagram pela Graph API.

A API não faz upload de arquivo: ela busca a mídia por URL pública. O PNG ou o
MP4 precisa estar acessível na internet antes de rodar isto (ver BASE_URL).

Uso:
    export IG_USER_ID=...        # ID da conta Instagram Business/Creator
    export IG_ACCESS_TOKEN=...   # token com instagram_business_content_publish
    export BASE_URL=https://...  # onde a mídia está hospedada
    export PREFIXO_SLIDES=...    # prefixo do nome dos arquivos na pasta da campanha

    python3 scripts/publicar-instagram.py posts/instagram/2026-07-13-instagram-datas-com-da-semana.md
    python3 scripts/publicar-instagram.py <post.md> --publicar   # posta de verdade

O formato sai do nome dos arquivos na pasta da campanha, não de um parâmetro:
    <prefixo>.mp4                             -> reels
    <prefixo>-slide-1.png, -slide-2.png, ...  -> carrossel
    <prefixo>.png                             -> imagem única

Os três caminhos são diferentes na Graph API. O carrossel cria um container por
slide com is_carousel_item, depois um container CAROUSEL que os amarra e carrega
a legenda. A imagem única é um container só, já com a legenda dentro. O Reels é
um container media_type=REELS com video_url, e é o único em que a Meta baixa e
recodifica o arquivo, o que leva minutos em vez de segundos.

Sem --publicar ele só simula: valida as credenciais, confere se a mídia responde
200 e mostra a legenda que iria ao ar. Nada é postado.
"""

import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

# A Meta tem dois caminhos de publicação, em hosts diferentes, e o token diz qual:
#   "IGAA..." -> Instagram API com Instagram Login -> graph.instagram.com
#   "EAA..."  -> Instagram API com Facebook Login  -> graph.facebook.com
# Usar um token no host do outro devolve "Cannot parse access token".
FB_API = "https://graph.facebook.com/v21.0"
IG_API = "https://graph.instagram.com/v21.0"
API = FB_API


def erro(msg):
    print(f"erro: {msg}", file=sys.stderr)
    sys.exit(1)


def chamar(metodo, caminho, params):
    """POST/GET na Graph API. Devolve o JSON, ou aborta com a mensagem da Meta."""
    url = f"{API}/{caminho}"
    dados = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(url, data=dados if metodo == "POST" else None, method=metodo)
    if metodo == "GET":
        req = urllib.request.Request(f"{url}?{urllib.parse.urlencode(params)}", method="GET")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        corpo = e.read().decode(errors="replace")
        try:
            m = json.loads(corpo)["error"]["message"]
        except Exception:
            m = corpo[:400]
        erro(f"Graph API {e.code} em {caminho}: {m}")


def ler_legenda(caminho_post):
    """Extrai a legenda: o que vem entre o frontmatter e o primeiro heading '##'."""
    texto = Path(caminho_post).read_text(encoding="utf-8")
    corpo = re.sub(r"^---\n.*?\n---\n", "", texto, count=1, flags=re.S)
    return corpo.split("\n## ", 1)[0].strip()


def ler_status(caminho_post):
    m = re.search(r"^status:\s*(\w+)", Path(caminho_post).read_text(encoding="utf-8"), re.M)
    return m.group(1) if m else "desconhecido"


def midia_do_post(base_url, pasta_campanha, prefixo):
    """
    O que publicar, na ordem, e de que formato. Devolve (formato, [(nome, url)]).

    O MP4 é checado primeiro: se a campanha tem vídeo e imagem com o mesmo
    prefixo, o vídeo é o post e as imagens são material de apoio.
    """
    pasta = Path(pasta_campanha)

    video = pasta / f"{prefixo}.mp4"
    if video.exists():
        return "reels", [(video.name, f"{base_url.rstrip('/')}/{video.name}")]

    imagens = sorted(pasta.glob(f"{prefixo}-slide-*.png"),
                     key=lambda p: int(re.search(r"-slide-(\d+)", p.name).group(1)))
    if not imagens:
        unica = pasta / f"{prefixo}.png"
        if unica.exists():
            imagens = [unica]
    if not imagens:
        erro(f"nenhuma mídia em {pasta_campanha} com prefixo '{prefixo}'. Esperava "
             f"{prefixo}.mp4 (reels), {prefixo}-slide-1.png (carrossel) "
             f"ou {prefixo}.png (imagem única)")
    if len(imagens) > 10:
        erro(f"o Instagram aceita no máximo 10 imagens por carrossel; achei {len(imagens)}")

    formato = "carrossel" if len(imagens) > 1 else "imagem única"
    return formato, [(p.name, f"{base_url.rstrip('/')}/{p.name}") for p in imagens]


def conferir_publica(url):
    """A Meta precisa BUSCAR a imagem. Se não responde 200 pra gente, não responde pra ela."""
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status == 200, r.status
    except urllib.error.HTTPError as e:
        return False, e.code
    except Exception as e:
        return False, str(e)


def esperar_container(container_id, token, tentativas=30, intervalo=3):
    """
    Um container só pode ser publicado quando termina de processar.

    Imagem fica pronta em segundos. Reels não: a Meta baixa o MP4 inteiro e
    recodifica, o que passa de um minuto sem nada de errado acontecendo. Por
    isso quem publica vídeo chama isto com uma janela bem maior.
    """
    for _ in range(tentativas):
        r = chamar("GET", container_id, {"fields": "status_code,status", "access_token": token})
        s = r.get("status_code")
        if s == "FINISHED":
            return
        if s in ("ERROR", "EXPIRED"):
            erro(f"container {container_id} falhou: {r.get('status', s)}")
        time.sleep(intervalo)
    erro(f"container {container_id} não ficou pronto em {tentativas * intervalo}s. "
         f"Se for Reels, o vídeo pode ser pesado demais ou a URL lenta demais "
         f"para a Meta baixar; confira o container {container_id} antes de repostar, "
         f"senão você corre o risco de publicar duas vezes.")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    publicar = "--publicar" in sys.argv
    if not args:
        erro("informe o arquivo do post. Ex.: posts/instagram/2026-07-13-....md")

    post = args[0]
    if not Path(post).exists():
        erro(f"não achei {post}")

    ig_user = os.environ.get("IG_USER_ID")
    token = os.environ.get("IG_ACCESS_TOKEN")
    base_url = os.environ.get("BASE_URL")
    if not (ig_user and token and base_url):
        erro("faltam IG_USER_ID, IG_ACCESS_TOKEN ou BASE_URL no ambiente")

    global API
    API = IG_API if token.startswith("IG") else FB_API

    # A data do post aponta pra pasta de campanha correspondente.
    data = re.search(r"(\d{4}-\d{2}-\d{2})", Path(post).name).group(1)
    pasta = Path("campanhas") / data
    prefixo = os.environ.get("PREFIXO_SLIDES", "datas-com")

    status = ler_status(post)
    legenda = ler_legenda(post)
    formato, midia = midia_do_post(base_url, pasta, prefixo)
    reels = formato == "reels"

    print(f"host      {API}")
    print(f"post      {post}")
    print(f"status    {status}")
    print(f"formato   {formato}")
    print(f"mídia     {len(midia)} arquivo(s) (de {pasta})")
    print(f"legenda   {len(legenda)} caracteres")
    print()

    if len(legenda) > 2200:
        erro(f"a legenda tem {len(legenda)} caracteres; o Instagram corta em 2200")

    # A mídia precisa estar de pé ANTES de falarmos com a Meta.
    print("conferindo se a mídia está acessível publicamente...")
    problema = False
    for nome, url in midia:
        ok, code = conferir_publica(url)
        print(f"  {'ok ' if ok else 'FALHA'} {code:>5}  {nome}")
        problema |= not ok
    if problema:
        erro("a mídia não está pública. A Meta busca o arquivo pela URL; "
             "se ele não responde 200, a publicação falha.")

    if not publicar:
        print("\n--- legenda que iria ao ar ---")
        print(legenda)
        print("\n--- fim ---")
        print("\nsimulação. Nada foi postado. Rode de novo com --publicar para valer.")
        return

    if status != "aprovado":
        erro(f"o post está como '{status}'. Só publico o que está 'aprovado'.")

    espera = {"tentativas": 30, "intervalo": 3}

    if reels:
        # Reels: um container só, com a legenda dentro. A Meta baixa o MP4 da
        # URL e recodifica, então este é o único formato em que o container
        # demora minutos para ficar FINISHED.
        nome, url = midia[0]
        print("\ncriando o container do reels...")
        pai = chamar("POST", f"{ig_user}/media", {
            "media_type": "REELS",
            "video_url": url,
            "caption": legenda,
            "access_token": token,
        })["id"]
        print(f"  {nome} -> {pai}")
        espera = {"tentativas": 60, "intervalo": 5}
    elif formato == "carrossel":
        print("\ncriando os containers de cada slide...")
        filhos = []
        for nome, url in midia:
            r = chamar("POST", f"{ig_user}/media", {
                "image_url": url,
                "is_carousel_item": "true",
                "access_token": token,
            })
            filhos.append(r["id"])
            print(f"  {nome} -> {r['id']}")

        print("\nesperando o processamento...")
        for cid in filhos:
            esperar_container(cid, token)

        print("criando o container do carrossel...")
        pai = chamar("POST", f"{ig_user}/media", {
            "media_type": "CAROUSEL",
            "children": ",".join(filhos),
            "caption": legenda,
            "access_token": token,
        })["id"]
    else:
        # Imagem única: um container só, e a legenda vai nele mesmo.
        nome, url = midia[0]
        print("\ncriando o container da imagem...")
        pai = chamar("POST", f"{ig_user}/media", {
            "image_url": url,
            "caption": legenda,
            "access_token": token,
        })["id"]
        print(f"  {nome} -> {pai}")

    print("esperando o processamento...")
    if reels:
        print("  (reels demora: a Meta baixa e recodifica o vídeo)")
    esperar_container(pai, token, **espera)

    print("publicando...")
    r = chamar("POST", f"{ig_user}/media_publish", {
        "creation_id": pai,
        "access_token": token,
    })
    print(f"\npublicado. id da mídia: {r['id']}")


if __name__ == "__main__":
    main()
