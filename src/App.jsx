import React, {useEffect} from 'react'
import './App.css';
import { Paper, Grid} from  '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom'
import ResponsiveDrawer from './components/navBar';
function App() {
  const navigate = useNavigate()
  const theme = createTheme()

  
  useEffect(() => {
  let user = JSON.parse(localStorage.getItem('user'))
    if(user){
    navigate('/dashboard')
  }else{
  navigate('/login')
  }
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <Paper> 
        <Grid container spacing={2}>
          <Grid item minWidth={20} minHeight={100}>
            <ResponsiveDrawer/>
          </Grid>
          <Grid item sm container>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
