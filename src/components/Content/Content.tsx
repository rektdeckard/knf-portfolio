import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
  color: ${(props) => props.color};
  width: 100%;

  & a {
    color: inherit;
  }
`;

const Content: React.FC<{ color?: string }> = ({
  color = "#DD8888",
  children,
}) => {
  return <ContentWrapper color={color}>{children}</ContentWrapper>;
};

export default Content;
