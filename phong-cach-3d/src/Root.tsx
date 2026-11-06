import React from "react";
import { Composition } from "remotion";
import { QuangTrung, QT_FRAMES } from "./phim/QuangTrung";
export const Root: React.FC = () => <Composition id="QuangTrung" component={QuangTrung} durationInFrames={QT_FRAMES} fps={30} width={1080} height={1920} />;
