import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ContextApp from "./context/ContextMain.tsx";
import ContextApp2 from "./context/Context2.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextApp>
      <ContextApp2>
        <App />
      </ContextApp2>
    </ContextApp>
  </React.StrictMode>
);
