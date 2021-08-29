export const theme = {
  palette: {
    primary: {
      light: '#914E77',
      main: '#762256',
      dark: '#52173C',
    },
    secondary: {
      light: '#4DC4B9',
      main: '#21B6A8',
      dark: '#177F75',
    },
    default: {
      lightest: '#F7FBFF',
      extraLight: '#F4F4F5',
      light: '#D8DADD',
      main: '#707070',
      dark: '#343434',
    },
    error: {
      light: '#B93030',
      main: '#AA0202',
      dark: '#8C0202',
    },
    text: {
      primary: '#292C30',
      secondary: '#707983',
      error: '#FF0000',
    },
    header: {
      main: '#707983',
    },
    white: '#FFFFFF',
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
    fontSize: 16,
    useNextVariants: true,
  },
  padding: {
    paper: '1.5rem',
    default: '1.5rem',
  },
  marginBottom: {
    paper: '1rem',
    default: '1rem',
  },
  // This disables the ripple sitewide
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};
