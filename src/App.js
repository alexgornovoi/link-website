import {React, useState, useEffect} from 'react'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Themes from './lib/theme'
import {Typography, Container, AppBar, Toolbar} from '@mui/material'
import LinkButton from './components/linkButton'
import {LinkedIn, GitHub, Code, Web } from '@mui/icons-material'
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
      <div>
        <Container maxWidth = "md" >
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h6' style={{ flex: 1 }}>Alex Links</Typography>
              <LightSwitch mode = {mode} func = {changeMode}/>
            </Toolbar>
          </AppBar>
          <Typography variant="h2">Hello</Typography>
          <br/>
          <LinkButton url='https://www.linkedin.com/in/alexeygornovoi/' text='LinkedIn' icon={<LinkedIn />} />
          <br/>
          <LinkButton url='https://github.com/alexgornovoi' text='GitHub' icon={<GitHub />} />
          <br/>
          <LinkButton url='https://leetcode.com/alexgornovoi/' text='LeetCode' icon = {<Code />} />
          <br/>
          <LinkButton url='https://alexgornovoi.com' text='Personnal Website' icon = {<Web />} off = {true} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
