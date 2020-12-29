import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 16px;
  width: 100vw;


`;

const Header: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <HeaderWrapper>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      {children}
    </HeaderWrapper>
  );
};

export default Header;
