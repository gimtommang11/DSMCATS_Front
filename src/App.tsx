import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import { GlobalStyle } from "./GlobalStyle";
import SideNavigationBar from "./components/SideNavigationBar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideNavigationBar />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
