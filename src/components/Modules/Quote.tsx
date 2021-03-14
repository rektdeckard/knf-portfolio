import React from "react";
import styled from "styled-components";

import { Quotation } from "../../data";

const QuoteContainer = styled.div`
  padding: 56px 0;
`;

const QuoteText = styled.q`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
`;

const Quote: React.FC<Quotation> = ({ text }) => {
  return (
    <QuoteContainer>
      <QuoteText>{text}</QuoteText>
    </QuoteContainer>
  );
};

export default Quote;
