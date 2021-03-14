import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { featured } from "../../data";
import { slugify } from "../../utils";

const featuredSeries = featured.map(({ name }) => ({
  name,
  path: `/featured/${slugify(name)}`,
}));

const NavigationContainer = styled.div`
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 72px 0 0 80px;
`;

const NavigationTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  & > a {
    color: black;
    text-decoration: none;
  }
`;

const NavigationItemList = styled.ul`
  margin: 40px 0 0;
  padding: 0;
  list-style: none;
`;

const NavigationItem = styled.li<{ $active?: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      font-weight: 700;
      list-style: disc;
    `}
`;

const Navigation: React.FC<{}> = () => {
  const { pathname } = useLocation();

  return (
    <NavigationContainer>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <NavigationTitle>Karen Nielsen-Fried</NavigationTitle>
      </Link>
      <NavigationItemList>
        {featuredSeries.map(({ name, path }) => (
          <NavigationItem key={name} $active={pathname === path}>
            <Link
              to={path}
              onClick={() =>
                document
                  .getElementById(slugify(name))
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              {name}
            </Link>
          </NavigationItem>
        ))}
      </NavigationItemList>
      <NavigationItemList>
        <NavigationItem $active={pathname === "/catalog"}>
          <Link to="/catalog">Catalog</Link>
        </NavigationItem>
        <NavigationItem $active={pathname === "/about"}>
          <Link to="/about">About the artist</Link>
        </NavigationItem>
      </NavigationItemList>
    </NavigationContainer>
  );
};

export default Navigation;
