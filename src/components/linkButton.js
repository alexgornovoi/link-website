import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material'
import Themes from '../lib/theme';


const LinkButton = ({ url, text, icon, off }) => {
    return (
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
    )
}

export default LinkButton