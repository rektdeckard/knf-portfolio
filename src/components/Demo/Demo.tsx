import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Voucher from "../Voucher/Voucher";
import Brushstroke from "../Brushstroke/Brushstroke";
import Filmstrip from "../Filmstrip/Filmstrip";

import "./Demo.css";

const FullBleedCentered = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  color: ${(props) => props.color};

  & a {
    color: inherit;
  }
`;

const Demo: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/demo/brushstroke" component={Brushstroke} />
        <Route path="/demo/filmstrip" component={Filmstrip} />
        <Route path="/demo">
          <FullBleedCentered color="#DD8888">
            <Voucher />
            <ul>
              <li>
                <Link to="/demo/brushstroke">Brushstroke</Link>
              </li>
              <li>
                <Link to="/demo/filmstrip">Filmstrip</Link>
              </li>
            </ul>
          </FullBleedCentered>
        </Route>
      </Switch>
    </Router>
  );
};
export default Demo;
