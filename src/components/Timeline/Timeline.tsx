import React, { MutableRefObject, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useIntersection } from "react-use";
import { useRecoilState } from "recoil";
import { XMasonry, XBlock } from "react-xmasonry";
import { Masonry } from "masonic";

import { FullWidth } from "../Modules";
import { Series } from "../../data/";
import { activeSectionAtom } from "../../state";
import { isArtwork, isQuotation } from "../../utils";

const Layout = styled.section`
  position: relative;
  padding-top: 4em;
  max-width: 956px;
  margin: 0 auto;
  transition: opacity 500ms ease;
`;

const SectionHeading = styled.h1`
  position: relative;
  margin: 0;
  top: 0.4em;
  left: 1.5em;
  font-size: 5em;
  text-decoration: underline;
  z-index: 1;
`;

const interserctionOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const Timeline: React.FC<Series> = ({ name, color, accent, works }) => {
  const history = useHistory();
  const [activeSection, setActiveSection] = useRecoilState(activeSectionAtom);
  const seriesRef = useRef() as MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(seriesRef, interserctionOptions);

  console.log(name, intersection);
  if (intersection && intersection.isIntersecting) {
    const { time, intersectionRatio } = intersection;
    if (name !== activeSection.name) {
      setActiveSection((curr) =>
        time > curr.time
          ? { name, color, accent, time, intersectionRatio }
          : curr
      );
      console.log(`/featured/${name.split(" ").join("-").toLowerCase()}`);
      history.push(`/featured/${name.split(" ").join("-").toLowerCase()}`);
    }
  }

  return (
    <Layout ref={seriesRef}>
      <SectionHeading>{name}</SectionHeading>
      {/* <Masonry
        items={works}
        columnCount={2}
        tabIndex={-1}
        itemKey={(data, index) => `${data.title}-${index}`}
        render={({ index, width, data }) => {
          if (isArtwork(data)) {
            const { Module } = data;
            return <Module key={index} {...data} />;
          } else {
            const { Module } = data;
            return <Module key={index} {...data} />;
          }
        }}
      /> */}

      <XMasonry targetBlockWidth={600} maxColumns={2}>
        {works.map((item, index) => {
          if (isArtwork(item)) {
            const { Module } = item;

            return (
              <XBlock key={item.title} width={Module === FullWidth ? 2 : 1}>
                <Module {...item} />
              </XBlock>
            );
          } else if (isQuotation(item)) {
            const { Module } = item;
            return (
              <XBlock key={item.text} width={1}>
                <Module {...item} />
              </XBlock>
            );
          } else {
            const { Module } = item;
            return (
              <XBlock
                key={`spacer-${item.height}-${index}`}
                width={item.width ?? 1}
              >
                <Module {...item} />
              </XBlock>
            );
          }
        })}
      </XMasonry>
    </Layout>
  );
};

export default Timeline;
