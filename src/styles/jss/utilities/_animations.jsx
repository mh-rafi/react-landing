import React from "react";
import { GlobalStyles } from "@mui/material";

export const animationStyles = (
  <GlobalStyles
    styles={{
        ".fade-in": {
          animation: "fade-in 1s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        },
        "@keyframes fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "@keyframes spin": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ".spin": {
          animation: "spin 3s infinite linear",
        },
    }}
  />
);
