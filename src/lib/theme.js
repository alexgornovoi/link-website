import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const LightTheme = createTheme({
    palette: {
      mode: 'light',
    },
});

const Themes = {
    DarkTheme,
    LightTheme,
};

export default Themes;

