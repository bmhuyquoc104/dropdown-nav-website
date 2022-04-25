import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemProvider } from "@mui/material";
import { theme } from "./theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemProvider theme={theme}>
      <App />
    </ThemProvider>
  </React.StrictMode>
);
