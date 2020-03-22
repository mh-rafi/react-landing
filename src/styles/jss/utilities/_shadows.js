import { makeStyles } from "@material-ui/core/styles";

export const shadowStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ...generateShadows(theme)
  }
}));

const generateShadows = theme => {
  let classList = {};

  theme.shadows.map((shadow, ind) => {
    classList[`elevation-z${ind}`] = {
      boxShadow: shadow
    };
  });

  return classList;
};
