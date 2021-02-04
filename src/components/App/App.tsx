import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "./App.css";
import Demo from "../Demo/Demo";
import Featured from "../Featured/Featured";
import { activeSectionAtom } from "../../state";

const AppWrapper = styled.main`
  background-color: ${(props) => props.color};
  transition: background-color 500ms ease;
`;

const App: React.FC<{}> = () => {
  const { color } = useRecoilValue(activeSectionAtom);

  return (
    <AppWrapper color={color}>
      <Router>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/">
            <Featured />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
};
export default App;
