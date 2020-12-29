import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Voucher from "../Voucher/Voucher";
import Brushstroke from "../Brushstroke/Brushstroke";
import Filmstrip from "../Filmstrip/Filmstrip";

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

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/brushstroke" component={Brushstroke} />
        <Route path="/filmstrip" component={Filmstrip} />
        <Route path="/">
          <FullBleedCentered color="#DD8888">
            <Voucher />
            <ul>
              <li>
                <Link to="/brushstroke">Brushstroke</Link>
              </li>
              <li>
                <Link to="/filmstrip">Filmstrip</Link>
              </li>
            </ul>
          </FullBleedCentered>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
