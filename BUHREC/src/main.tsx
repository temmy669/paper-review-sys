import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./utils/context/AuthContext.tsx";
import { LogRegToggleProvider } from "./utils/context/LogRegToggleContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <LogRegToggleProvider>
        <App />
      </LogRegToggleProvider>
    </AuthProvider>
  </React.StrictMode>
);
