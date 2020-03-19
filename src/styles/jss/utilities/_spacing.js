import { makeStyles } from "@material-ui/core/styles";

export const spacingStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".px-80": { paddingRight: "80px", paddingLeft: "80px" },
    ".px-sm-30": { padding: "0px 30px" },
    ".p-sm-24": { padding: "24px !important" },
    ".px-sm-24": { padding: "0px 24px !important" },
    ".pt-sm-24": { paddingTop: "24px !important" },
    ".pl-sm-24": { paddingLeft: "24px !important" },
    ".m-auto": { margin: "auto !important" },
    ".mx-auto": {
      marginLeft: "auto !important",
      marginRight: "auto !important"
    },
    ".my-auto": {
      marginTop: "auto !important",
      marginBottom: "auto !important"
    },
    ".m-sm-30": { margin: "30px" },
    ".mb-sm-30": { marginBottom: "30px" },
    ".w-full": { width: "100%" },
    ".max-w-full": { maxWidth: "100% !important" },
    ".w-full-screen": { width: "100vw" },
    ".min-w-750": { minWidth: "750px" },
    ".max-w-770": { maxWidth: "770px" },
    ".h-full": { height: "100% !important" },
    ".h-full-screen": { height: "100vh" },
    ".h-150px": { height: "150px !important" },
    ".size-36": { height: "36px !important", width: "36px !important" },
    ".size-24": { height: "24px !important", width: "24px !important" },
    ...generateMarginPaddingInREM()
  }
}));

const generateMarginPaddingInREM = (start = 0, end = 25) => {
  let classList = {};

  for (let i = start; i <= end; i++) {
    classList[`.m-${i}`] = {
      margin: `${i * 0.25}rem !important`
    };
    classList[`.mt-${i}`] = {
      marginTop: `${i * 0.25}rem !important`
    };
    classList[`.mb-${i}`] = {
      marginBottom: `${i * 0.25}rem !important`
    };
    classList[`.mr-${i}`] = {
      marginRight: `${i * 0.25}rem !important`
    };
    classList[`.ml-${i}`] = {
      marginLeft: `${i * 0.25}rem !important`
    };
    classList[`.mx-${i}`] = {
      marginLeft: `${i * 0.25}rem !important`,
      marginRight: `${i * 0.25}rem !important`
    };
    classList[`.my-${i}`] = {
      marginTop: `${i * 0.25}rem !important`,
      marginBottom: `${i * 0.25}rem !important`
    };

    classList[`.p-${i}`] = {
      padding: `${i * 0.25}rem !important`
    };
    classList[`.pt-${i}`] = {
      paddingTop: `${i * 0.25}rem !important`
    };
    classList[`.pb-${i}`] = {
      paddingBottom: `${i * 0.25}rem !important`
    };
    classList[`.pr-${i}`] = {
      paddingRight: `${i * 0.25}rem !important`
    };
    classList[`.pl-${i}`] = {
      paddingLeft: `${i * 0.25}rem !important`
    };
    classList[`.px-${i}`] = {
      paddingLeft: `${i * 0.25}rem !important`,
      paddingRight: `${i * 0.25}rem !important`
    };
    classList[`.py-${i}`] = {
      paddingTop: `${i * 0.25}rem !important`,
      paddingBottom: `${i * 0.25}rem !important`
    };

    // .m-#{$i} {
    //     margin: #{$i * 0.25}rem !important;
    //   }
    //   .mt-#{$i} {
    //     margin-top: #{$i * 0.25}rem !important;
    //   }
    //   .mr-#{$i} {
    //     margin-right: #{$i * 0.25}rem !important;
    //   }
    //   .mb-#{$i} {
    //     margin-bottom: #{$i * 0.25}rem !important;
    //   }
    //   .ml-#{$i} {
    //     margin-left: #{$i * 0.25}rem !important;
    //   }
    //   .mx-#{$i} {
    //     margin-left: #{$i * 0.25}rem !important;
    //     margin-right: #{$i * 0.25}rem !important;
    //   }
    //   .my-#{$i} {
    //     margin-top: #{$i * 0.25}rem !important;
    //     margin-bottom: #{$i * 0.25}rem !important;
    //   }

    //   .p-#{$i} {
    //     padding: #{$i * 0.25}rem !important;
    //   }
    //   .pt-#{$i} {
    //     padding-top: #{$i * 0.25}rem !important;
    //   }
    //   .pr-#{$i} {
    //     padding-right: #{$i * 0.25}rem !important;
    //   }
    //   .pb-#{$i} {
    //     padding-bottom: #{$i * 0.25}rem !important;
    //   }
    //   .pl-#{$i} {
    //     padding-left: #{$i * 0.25}rem !important;
    //   }
    //   .px-#{$i} {
    //     padding-left: #{$i * 0.25}rem !important;
    //     padding-right: #{$i * 0.25}rem !important;
    //   }
    //   .py-#{$i} {
    //     padding-top: #{$i * 0.25}rem !important;
    //     padding-bottom: #{$i * 0.25}rem !important;
    //   }
  }

  return classList;
};
