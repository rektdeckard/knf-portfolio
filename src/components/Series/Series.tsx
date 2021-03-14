import React from "react";
import styled from "styled-components";
import { XMasonry, XBlock } from "react-xmasonry";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(100px, 2fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 16px;
`;

const items = [
  { height: 200 },
  { height: 300 },
  { height: 260 },
  { height: 300 },
  { height: 180, full: true },
  { height: 190 },
  { height: 310 },
  { height: 200 },
];

const Series: React.FC<{}> = () => {
  return (
    <XMasonry maxColumns={2}>
      {items.map(({ height, full }, index) => (
        <XBlock key={index} width={full ? 2 : 1}>
          <div
            style={{
              height,
              margin: 8,
              backgroundColor: "red",
            }}
          />
        </XBlock>
      ))}
    </XMasonry>
  );
};

export default Series;
