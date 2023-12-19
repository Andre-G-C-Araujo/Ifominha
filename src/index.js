import { ThemeProvider } from "styled-components";

import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { AuthProvider } from "./hooks/auth";

import { Routes } from "./routes";
// import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
