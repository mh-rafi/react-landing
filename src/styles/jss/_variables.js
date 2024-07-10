export const variableStyles = () => {
  const theme = {
    palette: {
      primary: {
        main: '#3f51b5', // Replace with your primary color hex
      },
      secondary: {
        main: '#f50057', // Replace with your secondary color hex
      },
      error: {
        main: '#f44336', // Replace with your error color hex
      },
      text: {
        primary: '#212121', // Replace with your text primary color hex
        secondary: '#757575', // Replace with your text secondary color hex
        disabled: '#bdbdbd', // Replace with your text disabled color hex
        hint: '#9e9e9e', // Replace with your text hint color hex
      },
      background: {
        default: '#fafafa', // Replace with your default background color hex
        paper: '#ffffff', // Replace with your paper background color hex
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '1.66',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h1: {
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: '1',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h2: {
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: '1.2',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h3: {
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: '1.167',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h4: {
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: '1.235',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h5: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: '1.334',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      h6: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: '1.6',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '2.66',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.5',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '1.714',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.75',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.57',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
      button: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.75',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Replace with your font family
      },
    },
    shadows: [
      'none',
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
      '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
      '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
      '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
      '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
      '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
      '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
      '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
      '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
      '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
      '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
      '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
      '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
      '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
      '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
    ],
  };

  const styles = {
    ":root": {
      "--topbar-mobile-width": "220px",
      "--topbar-height": "64px",
      "--sidenav-width": "260px",
      "--sidenav-button-width": "220px",
      "--sidenav-compact-width": "80px",
      "--contained-layout-width": "1200px",
      "--primary": convertHexToRGB(theme.palette.primary.main),
      "--secondary": convertHexToRGB(theme.palette.secondary.main),
      "--error": convertHexToRGB(theme.palette.error.main),
      "--body": convertHexToRGB(theme.palette.text.primary),
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
      "--font-display-4": "300 112px/112px var(--font)",
    },
  };

  applyGlobalStyles(styles);

  function applyGlobalStyles(styles) {
    const rootStyle = document.documentElement.style;
    Object.keys(styles).forEach((selector) => {
      Object.keys(styles[selector]).forEach((prop) => {
        rootStyle.setProperty(prop, styles[selector][prop]);
      });
    });
  }

  function convertHexToRGB(hex) {
    if (hex.match("rgba")) return hex.slice(5, -1).replace(/\s/g, "");

    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");

      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
    }
  }

  function generateFontProperty(fontObject) {
    return `${fontObject.fontWeight} ${fontObject.fontSize}/${fontObject.lineHeight} ${fontObject.fontFamily}`;
  }
};
