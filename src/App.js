import { React, useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Themes from './lib/theme'
import LinkButton from './components/linkButton'
import LightSwitch from './components/themeSwitch'
import { CssBaseline, Typography, Container, Box } from '@mui/material'

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme-mode') === 'true');

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const changeMode = () => {
    setMode(!mode)
  }


  return (
    <ThemeProvider theme={mode ? Themes.DarkTheme : Themes.LightTheme}>
      <CssBaseline enableColorScheme />
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Container maxWidth='sm'>
            <Box sx={{bgcolor: 'background.paper'}} display ="flex" alignItems="center" justifyContent="center" minHeight="65vh"> 
              <Typography>hello</Typography>
              <LightSwitch mode = {mode} func = {changeMode}/>
            </Box>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
