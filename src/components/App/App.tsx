import { useState, useEffect } from "react";
import styled from "styled-components";
import { useWindupString } from "windups";
import { motion } from "framer-motion";
import "./App.css";

const FullBleedCentered = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const VoucherContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-family: monospace;
  color: #dd8888;
`;

const App: React.FC<{}> = () => {
  const [dash, setDash] = useState<number>(10);
  const [
    text,
    { skip, rewind, isFinished },
  ] = useWindupString(
    "This voucher good for one (1) hand-crafted portfolio website by Toby and Helena.",
    { pace: (char) => (char === " " ? 120 : 40) }
  );

  // useEffect(() => {
  //   let handle: number;
  //   const dancingDash = () => {
  //     setDash((d) => d + 1);
  //     handle = requestAnimationFrame(dancingDash);
  //   };
  //   dancingDash();
  //   return () => cancelAnimationFrame(handle);
  // }, []);

  return (
    <FullBleedCentered>
      <svg
        width="810"
        height="610"
        viewBox="0 0 810 610"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={isFinished ? rewind : skip}
      >
        <rect
          opacity={0.5}
          x={5}
          y={5}
          width={800}
          height={600}
          rx={56}
          stroke="#D33535"
          strokeWidth={5}
          strokeLinejoin="round"
          strokeDasharray="20 10"
          strokeDashoffset={-dash}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="-10"
            to="-100"
            dur="1500ms"
            repeatCount="indefinite"
          />
          <foreignObject height={600} width={800} x={0} y={0}>
            <div style={{ color: "white" }}>Hello World</div>
          </foreignObject>
        </rect>
        <foreignObject x={5} y={5} width={800} height={600}>
          {/* @ts-ignore */}
          <VoucherContent xmlns="http://www.w3.org/1999/xhtml">
            The future site of{" "}
            <a
              href="https://karennielsenfried.com"
              style={{ color: "#DD8888", fontSize: 40 }}
            >
              <strong>karennielsenfried.com</strong>
            </a>
            <br />
            <p
              style={{
                fontSize: 16,
                maxWidth: "50%",
                textAlign: "center",
                minHeight: 38,
              }}
            >
              {text}
            </p>
          </VoucherContent>
        </foreignObject>
      </svg>
    </FullBleedCentered>
  );
};
export default App;
