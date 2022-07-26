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
      paper: '#DFE8CC',
      default: '#F7EDDB'
    },
    text: {
      primary: '#1A291B',
    },
  },
});

const Themes = {
  DarkTheme,
  LightTheme,
};

export default Themes;

