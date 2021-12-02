import { lighten } from "@mui/system";

export const colorStyles = (theme) => ({
  ".bg-primary": { background: `${theme.palette.primary.main} !important` },
  ".bg-secondary": { background: `${theme.palette.secondary.main} !important` },
  ".bg-green": {
    backgroundColor: "rgba(0, 128, 0, 0.75) !important",
    background: "#08ad6c !important",
  },
  ".bg-error": {
    background: `${theme.palette.error.main} !important`,
    color: "white !important",
  },
  ".bg-white": { background: "#fff !important", color: "inherit" },
  ".bg-default": {
    background: `${theme.palette.background.default} !important`,
  },
  ".bg-paper": { background: `${theme.palette.background.paper}` },
  ".bg-light-gray": { background: "rgba(0, 0, 0, 0.03) !important" },
  ".bg-dark": { background: "#000000", color: "#fff" },
  ".bg-light-dark": { background: "#212121", color: "white" },
  ".hover-bg-primary": { transition: "all 250ms" },
  ".hover-bg-primary:hover": {
    background: `${theme.palette.primary.main} !important`,
    color: "#ffffff",
    backgroundColor: `${theme.palette.primary.main} !important`,
    fallbacks: [{ color: "white !important" }],
  },
  '.hover-bg-primary:hover [class^="MuiSvgIcon-"]': {
    fill: "white !important",
  },
  ".bg-light-primary": {
    background: `rgba(var(--primary), 0.15) !important`,
  },
  ".bg-light-secondary": {
    background: `${lighten(theme.palette.secondary.main, 0.85)} !important`,
  },
  ".bg-light-error": {
    background: `${lighten(theme.palette.error.main, 0.85)} !important`,
  },
  ".section-bg-light-primary": { background: "rgba(var(--primary),0.1)" },
  ".bg-light-green": { background: "rgba(8, 173, 108, 0.5) !important" },
  ".bg-transparent": { background: "transparent !important" },
  ".text-white": { color: "#fff !important" },
  ".text-black": { color: "rgba(0, 0, 0, 0.87) !important" },
  ".text-white-secondary": { color: "rgba(255, 255, 255, 0.87) !important" },
  ".text-muted-white": { color: "rgba(255, 255, 255, 0.54) !important" },
  ".text-light-white": { color: "rgba(255, 255, 255, 0.54) !important" },
  ".text-muted": { color: `${theme.palette.text.secondary} !important` },
  ".text-hint": { color: `${theme.palette.text.hint} !important` },
  ".text-gray": { color: "rgba(0, 0, 0, 0.74) !important" },
  ".text-brand": { color: `${theme.palette.primary.main} !important` },
  ".text-primary": { color: `${theme.palette.primary.main} !important` },
  ".text-secondary": { color: `${theme.palette.secondary.main} !important` },
  ".text-error": { color: `${theme.palette.error.main} !important` },
  ".text-green": { color: "#08ad6c !important" },
  ".text-inherit": { color: "inherit !important" },
  ".gray-on-hover": { transition: "background 250ms ease" },
  ".gray-on-hover:hover": { background: "rgba(0, 0, 0, 0.054)" },
  ".border-color-white": { borderColor: "#ffffff !important" },
  ".border-color-primary": {
    borderColor: `${theme.palette.primary.main} !important`,
  },
  ".border-color-default": {
    borderColor: `${theme.palette.background.default} !important`,
  },
  ".border-color-paper": {
    borderColor: `${theme.palette.background.paper} !important`,
  },
});
