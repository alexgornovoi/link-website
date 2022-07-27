import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material'
import Themes from '../lib/theme';


const LinkButton = ({ url, text, icon, off, mode }) => {
    return (
        <ThemeProvider theme={{ mode } ? Themes.DarkTheme : Themes.LightTheme}>
            <Button
                variant="outlined"
                color="inherit"
                startIcon={icon}
                onClick={(e) => { e.preventDefault(); window.open(url, '_blank'); }}
                style={{ justifyContent: "flex-start" }}
                disabled={off ? true : false}
            >
                {text}
            </Button>
        </ThemeProvider>
    )
}

export default LinkButton