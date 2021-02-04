import styled from "styled-components";

const Content = styled.div`
  display: grid;
  place-items: center;
  color: ${({ color = "#DD8888"}) => color};
  width: 100%;

  & a {
    color: inherit;
  }
`;

export default Content;
