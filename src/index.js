import React from "react";
import App from "./App";

import "normalize.css";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <Helmet>
        <title>
          Hire recent graduate local to Dallas | Kiriti Aryal - CS Undergrad
        </title>
        <meta name='description' />
      </Helmet>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
