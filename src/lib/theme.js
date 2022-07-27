import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#18131a',
        default: '#120214',
      },
      text: {
        primary: '#e9ddf7',
      },
    },
});

const LightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#C7F5C9',
        default: '#D7F5D8'
      },
      text: {
        primary: '#0A1D0B',
      },
    },
});

const Themes = {
    DarkTheme,
    LightTheme,
};

export default Themes;

