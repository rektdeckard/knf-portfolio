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

export const ModuleContainer = styled.article<{
  align: "left" | "right" | "full";
}>`
  padding: 0 ${({ align }) => (align === "left" ? "33.33%" : 0)} 96px
    ${({ align }) => (align === "right" ? "33.33%" : 0)};
  /* border: thin solid black; */
`;

export const ModuleImage = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

export const ModuleDescription = styled.div``;

export const ModuleTitle = styled.i``;

export const ModuleInfo = styled.p`
  margin: 0;
`;

export const ArtworkModule: React.FC<Artwork> = (props) => (
  <>
    <ModulePicture {...props} />
    <ModuleDescription>
      <ModuleTitle>{props.title}</ModuleTitle>
      {props.media && <ModuleInfo>{props.media}</ModuleInfo>}
      {props.size && <ModuleInfo>{formatSize(props.size)}</ModuleInfo>}
    </ModuleDescription>
  </>
);
