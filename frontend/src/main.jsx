import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

import App from "./App";
import StoreProvider from "./store";
import { ContextProvider } from "./context/AdminContext";
registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <StoreProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);
