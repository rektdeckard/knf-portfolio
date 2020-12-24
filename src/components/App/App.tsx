import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sections } from "../../data";
import "./App.css";

const App: React.FC<{}> = () => {
  const [dash, setDash] = useState<number>(10);

  useEffect(() => {
    let handle: number;
    const dancingDash = () => {
      setDash((d) => d + 1);
      handle = requestAnimationFrame(dancingDash);
    };
    dancingDash();

    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <svg
        width="810"
        height="610"
        viewBox="0 0 810 610"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          <foreignObject height={600} width={800} x={0} y={0}>
            <div style={{ color: "white" }}>Hello World</div>
          </foreignObject>
        </rect>
        <foreignObject x={5} y={5} width={800} height={600}>
          {/* @ts-ignore */}
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontFamily: "monospace",
              color: "#DD8888",
            }}
            // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
          >
            The future site of{" "}
            <a
              href="https://karennielsenfried.com"
              style={{ color: "#DD8888", fontSize: 40 }}
            >
              <strong>karennielsenfried.com</strong>
            </a>
            <br />
            <small
              style={{ fontSize: 16, maxWidth: "50%", textAlign: "center" }}
            >
              This voucher good for one (1) hand-crafted portfolio website by
              Toby and Helena
            </small>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
export default App;
