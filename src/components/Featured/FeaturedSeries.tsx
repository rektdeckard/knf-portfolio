import React, { MutableRefObject, useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { useIntersection, useDebounce } from "react-use";
import { useRecoilState } from "recoil";
import { XMasonry, XBlock } from "react-xmasonry";

import { FullWidth } from "../Modules";
import { Series } from "../../data/";
import { activeSectionAtom } from "../../state";
import { isArtwork, isQuotation, slugify } from "../../utils";

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

const FeaturedSeries: React.FC<Series> = ({ name, color, accent, works }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useRecoilState(activeSectionAtom);
  const seriesRef = useRef() as MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(seriesRef, interserctionOptions);

  useDebounce(
    () => {
      if (intersection && intersection.isIntersecting) {
        const { time, intersectionRatio } = intersection;
        if (name !== activeSection.name) {
          setActiveSection((curr) =>
            time > curr.time
              ? { name, color, accent, time, intersectionRatio }
              : curr
          );
          history.push(`/featured/${slugify(name)}`);
        }
      }
    },
    200,
    [intersection, activeSection, setActiveSection]
  );

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (pathname === `/featured/${slugify(name)}`)
        document
          .getElementById(slugify(name))
          ?.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 100);
    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <Layout ref={seriesRef} id={slugify(name)}>
      <SectionHeading>{name}</SectionHeading>
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

export default FeaturedSeries;
