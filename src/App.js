import {React, useState, useEffect} from 'react'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Themes from './lib/theme'
import {Typography, Container} from '@mui/material'
import LinkButton from './components/linkButton'
import {LinkedIn, GitHub} from '@mui/icons-material'
import LightSwitch from './components/themeSwitch'

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme-mode') === 'true');

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);
  
  const changeMode = () => {
    setMode(!mode)
  }


  return (
    <ThemeProvider theme = {mode? Themes.DarkTheme : Themes.LightTheme}>
      <CssBaseline enableColorScheme/>
      <Container maxWidth = "sm" >
        <Typography variant="h2" align='center'>Welcome To my Website</Typography>
        <br/>
        <LightSwitch m = {mode} func = {changeMode} />
        <br/>
        <LinkButton url='https://www.linkedin.com/in/alexeygornovoi/' text='LinkedIn' icon={<LinkedIn />} />
        <br/>
        <LinkButton url='https://github.com/alexgornovoi' text='GitHub' icon={<GitHub />} />
        <br/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
