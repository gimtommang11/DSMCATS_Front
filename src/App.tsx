import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyle } from "./GlobalStyle";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;