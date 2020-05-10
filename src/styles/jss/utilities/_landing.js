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
    ".section-intro1 h1, .section-intro1 h2, .section-intro1 h3, .section-intro1 h4, .section-intro1 h5, .section-intro1 h6": {
      color: "#ffffff",
    },
    ".section-intro1 .section-intro1__title": {
      margin: "0 0 24px",
      fontSize: "48px",
      fontWeight: "900",
      lineHeight: "52px",
      textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
    },
    ".section-intro1 .section-intro1__subtitle": {
      margin: "0 0 40px",
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "32px",
    },
    ".section-intro1 .section-intro1__list": { margin: "0 0 30px" },
    ".section-intro1 .section-intro1__list .section-intro1__list__item": {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    ".section-intro1 .section-intro1__list .section-intro1__list__item .material-icons": {
      marginRight: "7px",
    },
    ".section-intro1 .section-intro1__product": {
      position: "relative",
      top: "100px",
    },
    ".section-intro1 .section-intro1__product img": {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow:
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    },
    ".section-intro1 .section-intro1__product .section-intro1__product__link": {
      position: "absolute",
      top: "-100px",
      left: "-30px",
      textAlign: "center",
      display: "block",
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      background: "#ffffff",
      color: "rgba(0, 0, 0, 0.87)",
      padding: "37px 20px",
      boxSizing: "border-box",
      overflow: "hidden",
      boxShadow: "0 14px 32px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
    },
    ".section-intro1 .section-intro1__product .section-intro1__product__link:hover": {
      boxShadow: "0 19px 32px rgba(0, 0, 0, 0.4)",
    },
    ".section-intro1 .section-intro1__product .section-intro1__product__link .price": {
      fontSize: "32px",
      fontWeight: "700",
    },
    ".section-intro1 .section-intro1__product .section-intro1__product__link .price__text": {
      fontSize: "14px",
    },
    ".section-intro1 .intro1__description": {
      maxWidth: "570px",
      margin: "0 auto 24px",
    },
    "@media only screen and (max-width: 767px)": {
      ".section-intro1": { padding: "100px 0 !important" },
    },
    "@media only screen and (max-width: 959px)": {
      ".section-intro1": { textAlign: "center" },
      ".section-intro1 .section-intro1__list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      ".section-intro1 .section-intro1__product": { top: "0", left: "0" },
      ".section-intro1 .section-intro1__product__link": {
        display: "none !important",
      },
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
    ".section-portfolio1 .portfolio1__card": {
      position: "relative",
      height: "100%",
    },
    ".section-portfolio1 .portfolio1__card img": {
      width: "100%",
      height: "auto",
    },
    ".section-portfolio1 .portfolio1__card h5": {
      margin: "0px",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    ".section-portfolio1 .portfolio1__card p": { marginBottom: "16px" },
    ".section-portfolio1 .portfolio1__card .portfolio1__card__content": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    ".card__icon-64": {
      fontSize: "64px !important",
      height: "64px",
      width: "64px",
    },
    ".service__card:hover .card__icon-64": { color: "rgba(var(--primary), 1)" },
    ".section-service1 .service1__card": {
      borderTop: "2px solid black",
      height: "100%",
    },
    ".section-service1 .service1__card h3": {
      fontSize: "1.5rem",
      fontWeight: "normal",
    },
    ".section-service1 .service1__card .service1__card__content": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100%",
    },
    ".section-service1 .service1__card:hover": {
      borderTop: "2px solid rgba(var(--primary), 1)",
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
    ".section-testimonial1 .testimonial1__card-content > div:first-child p": {
      fontSize: "1rem",
      paddingBottom: "65px",
    },
    ".section-testimonial1 .testimonial1__card-content .card__user": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
    },
    ".section-testimonial1 .testimonial1__card-content .card__user img": {
      width: "48px",
      height: "48px",
      borderRadius: "24px",
      overflow: "hidden",
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
    ".section-pricing1 .pricing1__card-header": {
      padding: "12px",
      background: "rgba(0, 0, 0, 0.024)",
    },
    ".section-pricing1 .pricing1__card-header span:first-child": {
      fontSize: "1rem !important",
    },
    ".section-pricing1 .pricing1__card-header span:last-child": {
      fontSize: "0.813rem",
    },
    ".section-pricing1 .pricing1__highlighted": {
      background: "rgba(var(--primary), 1) !important",
    },
    ".section-pricing1 .pricing1__highlighted span": { color: "#fff" },
    ".section-pricing1 .pricing1__card-content h1": {
      margin: "0",
      marginBottom: "0.5rem",
      fontSize: "2rem",
    },
    ".section-pricing1 .pricing1__card-content div": { padding: "10px" },
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
