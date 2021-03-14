import styled from "styled-components";

const SpacerContainer = styled.div<{ $height: number }>`
  height: ${({ $height }) => $height}px;
`;

const Spacer: React.FC<{ height: number }> = ({ height }) => (
  <SpacerContainer $height={height} />
);

export default Spacer;
