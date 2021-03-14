import React from "react";
import { Artwork } from "../../data";

import { ModuleContainer, ArtworkModule } from "./common";

const LeftAlign: React.FC<Artwork> = (props) => (
  <ModuleContainer align="left">
    <ArtworkModule {...props} />
  </ModuleContainer>
);

export default LeftAlign;
