import React, { MutableRefObject, useRef } from "react";
import styled from "styled-components";
import { Masonry } from "masonic";
import { useIntersection } from "react-use";
import { useRecoilState } from "recoil";

import { Series } from "../../data/";
import { activeSectionAtom } from "../../state";

const Layout = styled.section`
  position: relative;
  padding-top: 4em;
  transition: opacity 500ms ease;
`;

const Item = styled.div`
  margin: 8px;

  & p {
    margin: 0.25em 0;
  }
`;

const SectionHeading = styled.h1`
  position: absolute;
  margin: 0;
  top: 0.1em;
  left: 1.5em;
  font-size: 5em;
  text-decoration: underline;
  z-index: 1;

  /* @media(max-width: 768px) {
    font-size: 2em;
  } */
`;

const interserctionOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const Timeline: React.FC<Series> = ({ name, color, works }) => {
  const [activeSection, setActiveSection] = useRecoilState(activeSectionAtom);
  const seriesRef = useRef() as MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(seriesRef, interserctionOptions);

  console.log(name, intersection);
  if (intersection && intersection.isIntersecting) {
    const { time, intersectionRatio } = intersection;
    if (name !== activeSection.name) {
      setActiveSection((curr) => time > curr.time ? { name, color, time, intersectionRatio } : curr);
    }
  }

  return (
    <Layout ref={seriesRef} style={{ opacity: +!!(intersection && intersection.isIntersecting) }}>
      <SectionHeading>{name}</SectionHeading>
      <Masonry
        items={works}
        columnCount={2}
        tabIndex={-1}
        itemKey={(data, index) => `${data.title}-${index}`}
        render={({ index, width, data }) => (
          <Item>
            <img src={data.src} width="100%" alt={data.alt} />
            <p>{data.title}</p>
            <p>{data.media}</p>
            <p>{data.size ? `${data.size[0]}" x ${data.size[1]}"` : ""}</p>
          </Item>
        )}
      />
    </Layout>
  );
};

export default Timeline;
