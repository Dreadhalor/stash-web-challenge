import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "@/assets/typekit.css";
import "./index.scss";
import { TooltipProvider } from "./components/ui/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>,
);
