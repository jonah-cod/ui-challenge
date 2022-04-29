import React, {useState, useEffect} from 'react'
import { Grid, TextField, Avatar, Chip } from '@mui/material'
import { useDispatch } from 'react-redux';
import { signupDataUpadate } from '../redux/reducers/signupReducer';
import { errorUpadate } from '../redux/reducers/errorReducer';
const Signup = () => {
  const dispatch = useDispatch()
  const flag = "https://img.icons8.com/color/48/000000/kenya-circular.png";
  
  
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [password, setpassword] = useState('')
  
  const [passerror, setpasserror] = useState(false)
  const checkpassword =(e)=>{
    setpasserror(false)
    if ((password.length === e.length&&password!==e) || password.length < e.length) {
      setpasserror(true)
    }else if(firstName&&lastName&&username&&email&&phoneNo&&password===e){
      dispatch(signupDataUpadate({firstName, lastName, username, email, phoneNo, password}))
      dispatch(errorUpadate(false))
    }else{dispatch(errorUpadate(true))}
  }
  useEffect(() => {
    dispatch(errorUpadate(true))
  }, [])
  


  return (<Grid container component={'form'} maxWidth={450} spacing={2} m='20px auto'>
      <Grid item xs={12} sm={6}>
        <TextField required
                   variant='outlined'
                   value={firstName}
                   fullWidth
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='First Name'
                   placeholder='first name'
                   onChange={e=>setfirstName(e.currentTarget.value.trim())}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required
                   variant='outlined'
                   value={lastName}
                   fullWidth
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='Last Name'
                   placeholder='last name'
                   onChange={e=>setlastName(e.currentTarget.value.trim())}/>
      </Grid>
      <Grid item xs={12}>
        <TextField required
                   autoFocus
                   variant='outlined'
                   value={username}
                   fullWidth
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='username'
                   placeholder='username'
                   onChange={e=>setusername(e.currentTarget.value.trim())}/>
      </Grid>
      <Grid item xs={12}>
        <TextField required
                   variant='outlined'
                   fullWidth
                   value={email}
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='email'
                   placeholder='email'
                   onChange={e=>setemail(e.currentTarget.value.trim())}/>
      </Grid>
      
      <Grid item xs={4} >
      <Chip 
      avatar={<Avatar alt="" src={flag} />}
      label="+254" />
      </Grid>
      <Grid item xs={8}>
          <TextField  InputLabelProps={{ shrink: true }}
                      required
                      fullWidth
                      value={phoneNo}
                      label="Mobile Number"
                      placeholder='712345678'
                      type="number"
                      size="small"
                      onChange={(e)=>{setphoneNo(e.currentTarget.value.trim())}}/>
          
      </Grid>
      <Grid item xs={12}>
        <TextField required
                   autoComplete=''
                   variant='outlined'
                   fullWidth
                   value={password}
                   type='password'
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='Password'
                   placeholder='password'
                   onChange={e=>setpassword(e.currentTarget.value.trim())}/>
      </Grid>
      <Grid item xs={12}>
        <TextField required
                   autoComplete=''
                   variant='outlined'
                   fullWidth
                   type='password'
                   size='small'
                   InputLabelProps={{shrink:true}}
                   label='Confirm Password'
                   placeholder='confirm password'
                   error={passerror? passerror: passerror}
                   onChange={e=>checkpassword(e.currentTarget.value.trim())}/>
      </Grid>

  </Grid>
  )
}

export default Signup