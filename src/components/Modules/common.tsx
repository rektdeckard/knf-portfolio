import React from "react";
import styled from "styled-components";

import { Artwork } from "../../data";
import { formatSize } from "../../utils";

export const ModulePicture: React.FC<Artwork> = ({ sources, alt }) => {
  return (
    <picture>
      {sources.map((s) => (
        <source key={s.srcSet} {...s} />
      ))}
      <ModuleImage src={sources[0]?.srcSet} alt={alt} />
    </picture>
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

export const ModuleContainer = styled.article<{
  align: "left" | "right" | "full";
}>`
  padding: 0 ${({ align }) => (align === "left" ? "33.33%" : 0)} 96px
    ${({ align }) => (align === "right" ? "33.33%" : 0)};
  /* border: thin solid black; */
`;

const ModuleImage = styled.img`
  width: 100%;
  margin-bottom: 8px;
  transition: transform 200ms ease;

  &:active {
    transform: scale(1.4);
    z-index: 1;
  }
`;

const ModuleDescription = styled.div``;

const ModuleTitle = styled.i``;

const ModuleInfo = styled.p`
  margin: 0;
`;

const ModuleInquireContainer = styled.small`
  text-transform: uppercase;
  /* opacity: 0.8; */
`;

export const ArtworkModule: React.FC<Artwork> = (props) => (
  <>
    <ModulePicture {...props} />
    <ModuleDescription>
      <ModuleTitle>{props.title}</ModuleTitle>
      {props.media && <ModuleInfo>{props.media}</ModuleInfo>}
      {props.size && <ModuleInfo>{formatSize(props.size)}</ModuleInfo>}
      <ModuleInquire {...props} />
    </ModuleDescription>
  </>
);
