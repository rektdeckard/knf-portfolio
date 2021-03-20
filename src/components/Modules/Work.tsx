import React from "react";
import styled from "styled-components";

import { Artwork } from "../../data";
import { formatSize } from "../../utils";

interface WorkProps {
  artwork: Artwork;
  gridArea: string;
}

const WorkContainer = styled.div<{ $gridArea: string }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ $gridArea }) => $gridArea};
  padding-bottom: 80px;
`;

const WorkImage = styled.img`
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  object-fit: contain;
`;

const ModuleInquireContainer = styled.small`
  text-transform: uppercase;
`;

const ModulePicture: React.FC<Artwork> = ({ sources, alt }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <picture>
        {sources.map((s) => (
          <source key={s.srcSet} {...s} />
        ))}
        <WorkImage src={sources[0]?.srcSet} alt={alt} />
      </picture>
    </div>
  );
};

const ModuleInquire: React.FC<Artwork> = ({ title, sold }) => (
  <ModuleInquireContainer>
    {sold ? (
      "Sold"
    ) : (
      <a
        href={`mailto:karen.n.fried@gmail.com?subject=Purchase Inquiry: ${title}`}
      >
        Inquire to purchase
      </a>
    )}
  </ModuleInquireContainer>
);

const ModuleDescription = styled.div``;

const ModuleTitle = styled.i``;

const ModuleInfo = styled.p`
  margin: 0;
`;

const Work: React.FC<WorkProps> = ({ artwork, gridArea }) => {
  const { title, media, size } = artwork;
  return (
    // <WorkContainer $gridArea={gridArea}>
    //   <ModulePicture {...artwork} />
    //   <ModuleDescription>
    //     <ModuleTitle>{title}</ModuleTitle>
    //     {media && <ModuleInfo>{media}</ModuleInfo>}
    //     {size && <ModuleInfo>{formatSize(size)}</ModuleInfo>}
    //     <ModuleInquire {...artwork} />
    //   </ModuleDescription>
    // </WorkContainer>
    <WorkContainer $gridArea={gridArea}>
      <ModulePicture {...artwork} />
      <ModuleDescription>
        <ModuleTitle>{title}</ModuleTitle>
        {media && <ModuleInfo>{media}</ModuleInfo>}
        {size && <ModuleInfo>{formatSize(size)}</ModuleInfo>}
        <ModuleInquire {...artwork} />
      </ModuleDescription>
      {/* <div style={{ backgroundColor: "green", height: 40 }} />
      <div style={{ backgroundColor: "orange", height: 40 }} />
      <div style={{ backgroundColor: "pink", height: 40 }} /> */}
    </WorkContainer>
  );
};

export default Work;
