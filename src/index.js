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
        <title>Hire a Techie Red Raider | Kiriti Aryal - CS Undergrad</title>
        <meta
          name="description"
          content="Looking for a full-stack developer. Hire from a trusted University like Texas Tech and diversify your workforce. We all like rainbows because they have more colors."
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
