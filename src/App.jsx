import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
