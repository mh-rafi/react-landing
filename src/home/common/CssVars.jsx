import React from "react";
import { withStyles } from "@material-ui/styles";

const generateFontProperty = fontObject => {
  return `${fontObject.fontWeight} ${fontObject.fontSize}/${fontObject.lineHeight} ${fontObject.fontFamily}`;
};

const generateShadowVars = theme => {
  return theme.shadows.reduce(function(result, item, index, array) {
    result[`--elevation-z${index}`] = item;
    return result;
  }, {});
};

const convertHexToRGB = hex => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};

const styles = theme => ({
  "@global": {
    ":root": {
      ...{
        "--primary": convertHexToRGB(theme.palette.primary.main),
        "--secondary": convertHexToRGB(theme.palette.secondary.main),
        "--error": convertHexToRGB(theme.palette.error.main),
        "--bg-default": theme.palette.background.default,
        "--bg-paper": theme.palette.background.paper,
        "--text-body": theme.palette.text.primary,
        "--text-muted": theme.palette.text.secondary,
        "--text-disabled": theme.palette.text.disabled,
        "--text-hint": theme.palette.text.hint,
        "--font": theme.typography.fontFamily,
        "--font-caption": generateFontProperty(theme.typography.caption),
        "--font-h1": generateFontProperty(theme.typography.h1),
        "--font-h2": generateFontProperty(theme.typography.h2),
        "--font-h3": generateFontProperty(theme.typography.h3),
        "--font-h4": generateFontProperty(theme.typography.h4),
        "--font-h5": generateFontProperty(theme.typography.h5),
        "--font-h6": generateFontProperty(theme.typography.h6),
        "--font-overline": generateFontProperty(theme.typography.overline),
        "--font-body-1": generateFontProperty(theme.typography.body1),
        "--font-body-2": generateFontProperty(theme.typography.body2),
        "--font-subtitle-1": generateFontProperty(theme.typography.subtitle1),
        "--font-subtitle-2": generateFontProperty(theme.typography.subtitle2),
        "--font-button": generateFontProperty(theme.typography.button),
        "--font-headline": "400 24px/32px var(--font)",
        "--font-title": "500 18px/26px var(--font)",
        "--font-display-1": "400 34px/40px var(--font)",
        "--font-display-2": "400 45px/48px var(--font)",
        "--font-display-3": "400 56px/56px var(--font)",
        "--font-display-4": "300 112px/112px var(--font)"
      },
      ...generateShadowVars(theme)
    }
  }
});

const CssVars = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default withStyles(styles, { withTheme: true })(CssVars);
