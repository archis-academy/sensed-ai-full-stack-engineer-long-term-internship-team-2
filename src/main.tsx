import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/home/home";
import "@src/main.scss";
import Footer from "@components/Footer/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div id="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
