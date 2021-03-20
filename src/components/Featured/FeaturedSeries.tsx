import React, { MutableRefObject, useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { useIntersection, useDebounce } from "react-use";
import { useRecoilState } from "recoil";

import { Series } from "../../data/";
import { activeSectionAtom } from "../../state";
import { isQuotation, isSpacer, slugify } from "../../utils";
import Work from "../Modules/Work";

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

const Container = styled.div``;

const Layout = styled.div<{ $grid: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 160px;
  grid-template-areas: ${({ $grid }) => $grid};
  gap: 16px;
  grid-auto-flow: column dense;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeaturedSeries: React.FC<Series> = ({
  name,
  color,
  accent,
  works,
  grid = "",
}) => {
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

  const gridAreas = [
    ...new Set(
      grid
        ?.replace(/["']/g, "")
        .trim()
        .split(/\s+/)
        .filter((c) => c !== ".") ?? []
    ),
  ];

  return (
    <Container ref={seriesRef} id={slugify(name)}>
      <SectionHeading>{name}</SectionHeading>
      <Layout $grid={grid}>
        {works.map((item, index) => {
          if (isSpacer(item)) return null;
          else if (isQuotation(item)) return null;
          return (
            <Work artwork={item} gridArea={gridAreas[index]} />
            // <div key={index} style={{ gridArea: gridAreas[index] }}>
            //   <img
            //     src={item.sources[0]?.srcSet}
            //     style={{ width: "100%", height: "100%", objectFit: "contain" }}
            //   />
            // </div>
          );
        })}
      </Layout>
    </Container>
  );
};

export default FeaturedSeries;
