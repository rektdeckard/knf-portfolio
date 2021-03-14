import React from "react";
import styled from "styled-components";

import { featured } from "../../data";
import FeaturedSeries from "./FeaturedSeries";

const FeaturedContainer = styled.div`
  max-width: 956px;
  margin: 0 auto;
`;

const Featured: React.FC<{}> = () => {
  return (
    <FeaturedContainer>
      {featured.map((series) => (
        <FeaturedSeries key={series.name} {...series} />
      ))}
    </FeaturedContainer>
  );
};

export default Featured;
