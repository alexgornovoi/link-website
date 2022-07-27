import { React, useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Themes from './lib/theme'
import LightSwitch from './components/themeSwitch'
import { CssBaseline,  Container, Box, Stack, Grow } from '@mui/material'
import Buttons from './components/buttons'
import About from './components/about'


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
        <Grow appear in timeout={1000}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Container maxWidth='sm'>
            <Box
              sx={{ bgcolor: 'background.paper' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="65vh"
            >
              <Grow appear in timeout={1500} >
              <Stack spacing={2} alignItems="center">
                <About/>
                <LightSwitch mode={mode} func={changeMode} />
                <Buttons mode={mode} />
              </Stack>
              </Grow>
            </Box>
          </Container>
        </Box>
        </Grow>
      </div>
    </ThemeProvider>
  );
}

export default App;
