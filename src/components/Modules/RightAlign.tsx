import React from "react";
import { Artwork } from "../../data";

import { ModuleContainer, ArtworkModule } from "./common";

const RightAlign: React.FC<Artwork> = (props) => (
  <ModuleContainer align="right">
    <ArtworkModule {...props} />
  </ModuleContainer>
);

export default RightAlign;
