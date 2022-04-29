import React, {useState} from 'react'
import { Box, Typography, Grid, TextField, Button} from '@mui/material'
import SnackBar from './snackBar';
import { postSignIn } from '../services/requests';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
    const [usernameOrEmail, setusernameOrEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState(false);
    const [wrongpass, setwrongpass] = useState(false)

    const handleLogin =(e)=>{
        e.preventDefault();
        if(!usernameOrEmail || !password){
            seterror(true)
        }else{
          postSignIn({usernameOrEmail, password}).then(res=>{
            console.log(res);
            if(res&&res.success){
              localStorage.setItem('user', JSON.stringify(res))
              navigate('/')
            }else{
              setwrongpass(true)
            }
          })
        }
        
    }

  return (<Box maxWidth={350} sx={{m: '100px auto'}}>
      <Typography variant='h4' color='primary'>
        login
      </Typography>
      {wrongpass? <SnackBar message={'Please check your credentials'}/>: ""}
      {error? <SnackBar message={'Please fill in your credentials'}/>: ""}
      <Grid component='form' container onSubmit={handleLogin} noValidate >
        <Grid item mt={2} xs={12} >
            <TextField  
                       required
                       autoFocus
                       value={usernameOrEmail}
                       variant='outlined'
                       fullWidth
                       size='small'
                       InputLabelProps={{shrink:true}}
                       label='username'
                       placeholder='Enter username or email'
                       onChange={e=>{setusernameOrEmail(e.currentTarget.value.trim()); 
                        seterror(false)}}
                       error={error? error : false}/>
        </Grid>
        <Grid item mt={2} xs={12}>
            <TextField required
                       value={password}
                       variant='outlined'
                       fullWidth
                       size='small'
                       InputLabelProps={{shrink:true}}
                       label='password'
                       placeholder='Enter password'
                       type='password'
                       onChange={e=>{setpassword(e.currentTarget.value.trim()); 
                        seterror(false)}}
                       error={error? error : false}/>
        </Grid>
        <Grid item mt={2} xs={12} sm={6}>
            <Button fullWidth variant='contained' type='submit'> login</Button>
        </Grid>
      </Grid>
  </Box>
)
}

export default Login