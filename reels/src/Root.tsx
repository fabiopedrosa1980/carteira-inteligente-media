import "./index.css";
import { Composition } from "remotion";
import {
  calculateMetadata,
  FPS,
  ReelsDividendosAgosto,
} from "./dividendos-agosto/Reels";
import {
  calculateMetadata as calculateMetadataTourApp,
  ReelsTourApp,
} from "./tour-app/Reels";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Reels 9:16. Cada campanha nova entra como uma Composition aqui.
          A duração não é fixa: sai da narração, via calculateMetadata. */}
      <Composition
        id="dividendos-agosto"
        component={ReelsDividendosAgosto}
        fps={FPS}
        width={1080}
        height={1920}
        calculateMetadata={calculateMetadata}
        defaultProps={{ duracoes: [] }}
        durationInFrames={1}
      />
      <Composition
        id="tour-app"
        component={ReelsTourApp}
        fps={FPS}
        width={1080}
        height={1920}
        calculateMetadata={calculateMetadataTourApp}
        defaultProps={{ duracoes: [] }}
        durationInFrames={1}
      />
    </>
  );
};
