import React from "react";
import { Artwork } from "../../data";

import { ModuleContainer, ArtworkModule } from "./common";

const FullWidth: React.FC<Artwork> = (props) => (
  <ModuleContainer align="full">
    <ArtworkModule {...props} />
  </ModuleContainer>
);

export default FullWidth;
