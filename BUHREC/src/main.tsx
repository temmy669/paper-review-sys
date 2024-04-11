import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./utils/context/AuthContext.tsx";
import { LogRegToggleProvider } from "./utils/context/LogRegToggleContext.tsx";
import { DocumentProvider } from "./utils/context/DocumentContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <DocumentProvider>
        <LogRegToggleProvider>
          <App />
        </LogRegToggleProvider>
      </DocumentProvider>
    </AuthProvider>
  </React.StrictMode>
);
