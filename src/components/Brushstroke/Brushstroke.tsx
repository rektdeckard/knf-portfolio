import { motion, useViewportScroll } from "framer-motion";
import Content from "../Content/Content";
import Header from "../Header/Header";

const Brushstroke: React.FC<{}> = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Content>
      {/* <motion.svg
        width="1175"
        height="2892"
        viewBox="0 0 1175 2892"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M749 -23C837 89 936.6 380.6 615 539C213 737 -183 937 141 1137C465 1337 943 887 875 1167C807 1447 151 2083 31.0003 1765C-88.9997 1447 175 1273 395 1519C615 1765 565 2239 935 2227C1305 2215 1171 1929 1023 1977C875 2025 801 2403 1111 2891"
          stroke="currentColor"
          strokeWidth={8}
          style={{ pathLength: scrollYProgress }}
          strokeLinecap="round"
        />
      </motion.svg> */}
      <motion.svg
        width="1237"
        height="2928"
        viewBox="0 0 1237 2928"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x={0} y={0} width="100vw" height={100}>
          <Header title="Scroll Down" />
        </foreignObject>
        <motion.path
          d="M776.018 18C864.018 130 963.618 421.6 642.018 580C240.018 778 -155.982 978 168.018 1178C492.018 1378 970.018 928 902.018 1208C834.018 1488 178.018 2124 58.0179 1806C-61.9821 1488 202.018 1314 422.018 1560C642.018 1806 592.018 2280 962.018 2268C1332.02 2256 1198.02 1970 1050.02 2018C902.018 2066 818 2424.5 1128 2912.5"
          stroke="#B97171"
          strokeWidth="55"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M792 10.5C880 122.5 979.1 431.6 657.5 590C255.5 788 -141.104 986.877 190.5 1174C521 1360.5 969.315 915.418 913 1198C857 1479 212.522 2123.65 68.9999 1838.5C-82.4999 1537.5 133.412 1295.66 404 1523C623 1707 600.5 2262.11 958.5 2250.5C1328.5 2238.5 1145 1979.46 1050.5 2032C916.5 2106.5 835 2416.5 1145 2904.5"
          stroke="#D59A8D"
          strokeWidth="10"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M765.5 28.5C853.5 140.5 932.601 431.6 611.001 590C209.001 788 -175.499 981.5 148.501 1181.5C472.501 1381.5 989.432 944.938 882.501 1212.5C767.001 1501.5 197.5 2113 77.5006 1795C-42.4989 1477 195.5 1335.5 415.5 1581.5C635.5 1827.5 601.5 2296.5 971.5 2284.5C1341.5 2272.5 1217 1960.5 1069 2008.5C838 2083.42 824.5 2422 1109 2920"
          stroke="#DD8888"
          strokeWidth="12"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M776.018 18C864.018 130 963.618 421.6 642.018 580C240.018 778 -155.982 978 168.018 1178C492.018 1378 970.018 928 902.018 1208C834.018 1488 178.018 2124 58.0179 1806C-61.9821 1488 202.018 1314 422.018 1560C642.018 1806 592.018 2280 962.018 2268C1332.02 2256 1198.02 1970 1050.02 2018C902.018 2066 818 2424.5 1128 2912.5"
          stroke="#C5897C"
          strokeWidth="11"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.path
          d="M804.018 5C892.018 117 991.618 408.6 670.018 567C268.018 765 -127.982 965 196.018 1165C520.018 1365 998.018 915 930.018 1195C862.018 1475 206.018 2111 86.0179 1793C-33.9821 1475 230.018 1301 450.018 1547C670.018 1793 620.018 2267 990.018 2255C1360.02 2243 1226.02 1957 1078.02 2005C930.018 2053 846 2411.5 1156 2899.5"
          stroke="#9F6F7B"
          strokeWidth="13"
          style={{ pathLength: scrollYProgress }}
        />
      </motion.svg>
    </Content>
  );
};
export default Brushstroke;