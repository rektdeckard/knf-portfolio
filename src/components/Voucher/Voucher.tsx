import styled from "styled-components";
import { useWindupString } from "windups";

const VoucherContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

const Voucher: React.FC<{}> = () => {
  const [
    text,
    { skip, rewind, isFinished },
  ] = useWindupString(
    "This voucher good for one (1) hand-crafted portfolio website by Toby and Helena.",
    { pace: (char) => (char === " " ? 120 : 40) }
  );

  return (
    <svg
      width="810"
      height="610"
      viewBox="0 0 810 610"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={isFinished ? rewind : skip}
    >
      <rect
        x={5}
        y={5}
        width={800}
        height={600}
        rx={56}
        stroke="currentColor"
        strokeWidth={5}
        strokeLinejoin="round"
        strokeDasharray="20 10"
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
          <a href="https://karennielsenfried.com">
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
  );
};
export default Voucher;
