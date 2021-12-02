export const shadowStyles = (theme) => {
  let classList = {};

  theme.shadows.map((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`,
    };
  });

  return classList;
};
