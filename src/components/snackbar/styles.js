const style = theme => ({
  snackbar: {
    bottom: '1rem',
    left: '1rem',

    width: 'calc(100vw - 2rem)',

    [theme.breakpoints.up('sm')]: {
      left: '50%',

      width: 'auto',
    },
  },
});
export default style;
