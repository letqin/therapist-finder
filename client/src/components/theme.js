import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#71c9e9',
        main: '#636aa4',
        dark: '#314b98',
        contrastText: '#fff',
      },
      secondary: {
        light: '#f99b35',
        main: '#e06c91',
        dark: '#58595b',
        contrastText: '#fff',
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: { h1: 'h2'}
      }
    }
  });

  export default theme