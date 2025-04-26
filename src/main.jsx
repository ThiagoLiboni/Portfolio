import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "../public/style.css"
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
