import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RepoProvider } from "./context";

import NavBar from "./components/NavBar/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RepoProvider>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </RepoProvider>
);
