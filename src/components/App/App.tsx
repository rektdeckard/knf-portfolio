import React, { Suspense } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import TinyColor from "tinycolor2";

import Demo from "../Demo/Demo";
import Navigation from "../Navigation";
import { activeSectionAtom } from "../../state";
import Loader from "../Loader/Loader";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', Helvetica, sans-serif;
  background-color: #D8DDC6;
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

small > a {
  font-size: inherit;
}
`;

const AppWrapper = styled.main<{ $color: string; $accent?: string }>`
  padding: 0 80px 0 320px;
  background-color: ${({ $color }) => $color ?? "#D8DDC6"};
  color: ${({ $color }) => (TinyColor($color).isDark() ? "white" : "black")};
  transition-property: color, background-color;
  transition-duration: 500ms;
  transition-timing-function: ease;

  & q {
    color: ${({ $accent }) => $accent};
  }
`;

const Load = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const Featured = React.lazy(() => import("../Featured"));
const News = React.lazy(() => import("../News"));

const App: React.FC<{}> = () => {
  const { color, accent } = useRecoilValue(activeSectionAtom);

  return (
    <>
      <GlobalStyle />
      <Suspense
        fallback={
          <Load>
            <Loader type="ladder" />
          </Load>
        }
      >
        <AppWrapper $color={color} $accent={accent}>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/demo" component={Demo} />
              <Route exact path="/news">
                <Suspense fallback="loading...">
                  <News />
                </Suspense>
              </Route>
              <Route path="/">
                <Featured />
              </Route>
            </Switch>
          </Router>
        </AppWrapper>
      </Suspense>
    </>
  );
};
export default App;
