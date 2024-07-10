import React from "react";
import { GlobalStyles } from "@mui/material";
import { lighten } from "@mui/material";

export const colorStyles = (
  <GlobalStyles
    styles={({ palette, ...theme }) => ({
        ".bg-primary": { background: `${palette.primary.main} !important` },
        ".bg-secondary": { background: `${palette.secondary.main} !important` },
        ".bg-green": {
          backgroundColor: "rgba(0, 128, 0, 0.75) !important",
          background: "#08ad6c !important",
        },
        ".bg-error": {
          background: `${palette.error.main} !important`,
          color: "white !important",
        },
        ".bg-white": { background: "#fff !important", color: "inherit" },
        ".bg-default": { background: `${palette.background.default} !important` },
        ".bg-paper": { background: `${palette.background.paper}` },
        ".bg-light-gray": { background: "rgba(0, 0, 0, 0.03) !important" },
        ".bg-dark": { background: "#000000", color: "#fff" },
        ".bg-light-dark": { background: "#212121", color: "white" },
        ".hover-bg-primary": { transition: "all 250ms" },
        ".hover-bg-primary:hover": {
          background: `${palette.primary.main} !important`,
          color: "#ffffff",
          backgroundColor: `${palette.primary.main} !important`,
          fallbacks: [{ color: "white !important" }],
        },
        '.hover-bg-primary:hover [class^="MuiSvgIcon-"]': {
          fill: "white !important",
        },
        ".bg-light-primary": {
          background: `rgba(var(--primary), 0.15) !important`,
        },
        ".bg-light-secondary": {
          background: `${lighten(palette.secondary.main, 0.85)} !important`,
        },
        ".bg-light-error": {
          background: `${lighten(palette.error.main, 0.85)} !important`,
        },
        ".section-bg-light-primary": { background: "rgba(var(--primary),0.1)" },
        ".bg-light-green": { background: "rgba(8, 173, 108, 0.5) !important" },
        ".bg-transparent": { background: "transparent !important" },
        ".text-white": { color: "#fff !important" },
        ".text-black": { color: "rgba(0, 0, 0, 0.87) !important" },
        ".text-white-secondary": { color: "rgba(255, 255, 255, 0.87) !important" },
        ".text-muted-white": { color: "rgba(255, 255, 255, 0.54) !important" },
        ".text-light-white": { color: "rgba(255, 255, 255, 0.54) !important" },
        ".text-muted": { color: `${palette.text.secondary} !important` },
        ".text-hint": { color: `${palette.text.hint} !important` },
        ".text-gray": { color: "rgba(0, 0, 0, 0.74) !important" },
        ".text-brand": { color: `${palette.primary.main} !important` },
        ".text-primary": { color: `${palette.primary.main} !important` },
        ".text-secondary": { color: `${palette.secondary.main} !important` },
        ".text-error": { color: `${palette.error.main} !important` },
        ".text-green": { color: "#08ad6c !important" },
        ".text-inherit": { color: "inherit !important" },
        ".gray-on-hover": { transition: "background 250ms ease" },
        ".gray-on-hover:hover": { background: "rgba(0, 0, 0, 0.054)" },
        ".border-color-white": { borderColor: "#ffffff !important" },
        ".border-color-primary": {
          borderColor: `${palette.primary.main} !important`,
        },
        ".border-color-default": {
          borderColor: `${palette.background.default} !important`,
        },
        ".border-color-paper": {
          borderColor: `${palette.background.paper} !important`,
        },
    })}
  />
);
