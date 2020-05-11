import { makeStyles } from "@material-ui/core/styles";

export const landingStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".landing": { color: "rgba(0, 0, 0, 0.87)", overflow: "hidden" },
    ".landing p": { color: "rgba(var(--body), 0.74)" },
    ".landing a": { textDecoration: "none" },
    ".landing div, .landing section": { boxSizing: "border-box" },
    ".section-intro": { paddingTop: "7.5rem !important" },
    "@media screen and (max-width: 767px)": {
      ".section-intro": { paddingTop: "5rem !important" },
      ".section-intro2": { padding: "100px 0 0 !important" },
      ".section-intro2 .section-intro2__product": { bottom: "-63px" },
    },
    ".section-intro1": {
      padding: "180px 0 !important",
      color: "#ffffff",
      overflow: "hidden",
    },

    "@media only screen and (max-width: 767px)": {
      ".section-intro1": { padding: "100px 0 !important" },
    },

    "@media only screen and (max-width: 959px)": {
      ".section-intro1": { textAlign: "center" },
    },

    ".section-intro2": {
      padding: "180px 0 0 !important",
      overflow: "visible !important",
    },
    ".section-intro2 h1, .section-intro2 h2, .section-intro2 h3, .section-intro2 h4, .section-intro2 h5, .section-intro2 h6": {
      color: "#ffffff",
    },
    ".section-intro2 .section-intro2__product": {
      position: "relative",
      top: "auto",
      left: "auto",
      right: "auto",
      margin: "auto",
      bottom: "-80px",
      maxWidth: "780px",
      marginBottom: "5rem",
    },
    ".section-intro2 .section-intro2__product img": {
      borderRadius: "0.5rem",
      boxShadow: "0 10px 16px rgba(0, 0, 0, 0.2)",
    },
    "@media screen and (max-width: 580px)": {
      ".section-intro2 .section-intro2__product": { bottom: "-39px" },
    },
    ".section-intro3": { background: "#ffffff", color: "rgba(0, 0, 0, 0.87)" },
    ".section-intro3 .section-intro1__title": {
      color: "rgba(var(--primary), 1)",
    },
    ".section-intro3 .intro3__product": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "2.5rem",
    },
    ".section-intro3 .intro3__product img": { maxWidth: "65%" },

    ".card__icon-64": {
      fontSize: "64px !important",
      height: "64px",
      width: "64px",
    },
    ".section-service4": { transition: "transform 400ms bezier()" },
    ".section-service4 .service4__card": {
      position: "relative",
      overflow: "hidden",
    },
    ".section-service4 .service4__card .service4__card__icon": {
      position: "absolute",
      fontSize: "200px",
      height: "200px",
      width: "200px",
      left: "-80px",
      bottom: "-80px",
      zIndex: "1",
      opacity: "0.24",
      transition: "transform 400ms bezier()",
    },
    ".section-service4 .service4__card .service4__card__description": {
      maxWidth: "370px",
      textAlign: "left",
      verticalAlign: "middle",
      padding: "32px",
      marginLeft: "96px",
      zIndex: "2",
    },
    ".section-service4 .service4__card:hover": {
      transform: "translateY(-8px)",
    },
    ".section-service4 .service4__card:hover .service4__card__icon": {
      transform: "translateY(-8px)",
      color: "rgba(var(--secondary), 1)",
      opacity: "0.6",
    },
    ".section-service5 .service5__image-holder": { overflow: "hidden" },
    ".section-service5 .service5__image-holder img": {
      width: "100%",
      borderRadius: "4px",
    },
    ".section-service5 p": { whiteSpace: "pre-line" },
    ".section-service5 .service5__link-icon": {
      fontSize: "inherit",
      verticalAlign: "middle",
    },
    ".section-service6 .sevice6__circle": {
      width: "112px",
      height: "112px",
      margin: "0px auto",
      background: "#fff",
      borderRadius: "50%",
      overflow: "hidden",
    },
    ".section-service7 img": { maxHeight: "280px" },
    ".section-service7 .service7__card__description": {
      maxWidth: "370px",
      textAlign: "left",
    },
    ".section-service7 .service7__card__description p": {
      whiteSpace: "pre-line",
    },
    ".section-service7 .service7__card": {
      backgroundImage: 'url("/assets/images/illustrations/1.svg")',
      backgroundSize: "250px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center right",
    },
    ".section-service7 .service7__card .service7__card__icon": {
      fontSize: "48px",
    },
    ".section-testimonial1 .testimonial1__card-content": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100%",
    },
    ".section-testimonial1 .testimonial1__card-content > div:first-child img": {
      height: "36px !important",
      width: "auto",
    },
    ".section-testimonial3 img": {
      margin: "0px",
      padding: "0px",
      height: "48px",
      width: "48px",
      verticalAlign: "middle",
      borderRadius: "50%",
      overflow: "hidden",
    },
    ".section-testimonial3 .test": { background: "red" },
    ".section-cta1": {
      color: "#fff",
      background:
        "url(/assets/images/home-bg.jpg) center center/cover no-repeat",
    },
    ".section-cta1 h1, .section-cta1 h2, .section-cta1 h3, .section-cta1 h4, .section-cta1 h5, .section-cta1 h6": {
      color: "#ffffff",
    },
    ".section-cta1 h2": {
      fontSize: "1.75rem",
      margin: "0",
      paddingBottom: "0.5rem",
      fontWeight: "400",
      lineHeight: "1.1",
    },
    ".section-cta1 p": { margin: "0" },
    ".section-footer1 h4": {
      fontSize: "1.25rem",
      margin: "0 0 24px",
      position: "relative",
    },
    ".section-footer1 h4::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "0",
      height: "2px",
      width: "64px",
      backgroundColor: "rgba(var(--secondary), 1)",
    },
    ".section-footer1 .footer1__contact h5": { fontSize: "1rem" },
    ".section-footer1 .footer1__contact > div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    ".section-footer1 .footer1__contact .footer1__contact__icon": {
      color: "rgba(var(--secondary), 1)",
    },
    ".section-footer1 .footer1__disclaimer__link img": {
      height: "24px",
      width: "24px",
    },
    ".section-footer1 .footer1__contact, .section-footer1 .footer1__disclaimer, .section-footer1 .footer1__about": {
      padding: "30px",
      height: "100%",
      boxShadow: "3px 0 4px rgba(0, 0, 0, 0.2)",
    },
  },
}));
