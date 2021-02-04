import React from "react";

import { featured } from "../../data";
import Timeline from "../Timeline/Timeline";

const Featured: React.FC<{}> = () => {
  return (
    <>
      {featured.map((series) => (
        <Timeline key={series.name} {...series} />
      ))}
    </>
  );
};

export default Featured;
