import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Demo from "../Demo/Demo";
import Navigation from "../Navigation";
import Featured from "../Featured";
import { activeSectionAtom } from "../../state";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', Helvetica, sans-serif;
}

h1 {
  font-weight: 400;
}

a {
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
}
`;

const AppWrapper = styled.main<{ $color: string; $accent?: string }>`
  padding: 0 80px 0 320px;
  background-color: ${({ $color }) => $color};
  transition: background-color 500ms ease;

  & q {
    color: ${({ $accent }) => $accent};
  }
`;

const App: React.FC<{}> = () => {
  const { color, accent } = useRecoilValue(activeSectionAtom);

  return (
    <AppWrapper $color={color} $accent={accent}>
      <GlobalStyle />
      <Router>
        <Navigation />
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
