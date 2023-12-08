import { ThemeProvider } from "styled-components";

import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { MenuClient } from "./Pages/MenuClient";
// import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MenuClient />
    </ThemeProvider>
  </React.StrictMode>
);
