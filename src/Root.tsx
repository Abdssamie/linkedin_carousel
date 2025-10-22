import React from "react";
import { createCarousel } from "./lib/createCarousel";
import { createPresentation } from "./lib/createPresentation";
import { newExampleCarousels } from "./examples/carousels/complete-showcase";
import {
  businessPitchPresentation,
  trainingDeckPresentation,
} from "./examples/presentations";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Pre-configured example carousels */}
      {newExampleCarousels.map((carousel) => createCarousel(carousel))}

      {/* Pre-configured example presentations */}
      {createPresentation(businessPitchPresentation)}
      {createPresentation(trainingDeckPresentation)}
    </>
  );
};
