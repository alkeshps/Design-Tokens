import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Topbar from "./Topbar.jsx";
import AppCard from "./AppCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#E81E1E] min-h-screen content-center">
      <Topbar />

      <div
        className="bg-[#F3F5F8] min-h-screen rounded-tl-[24px] rounded-tr-[24px] 
        w-full"
      >
        <div className="p-[32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-[24px] content-center container mx-auto">
          <AppCard /> <AppCard /> <AppCard />
        </div>
      </div>
    </div>
  </StrictMode>
);
