import React, {useState, useEffect} from 'react'
import { Grid, TextField, Chip, Avatar} from '@mui/material'
import SelectOne from './selectOne'
import { fetchCountry } from '../services/requests'
import { orgDataUpdate } from '../redux/reducers/signupReducer'
import { errorUpadate } from '../redux/reducers/errorReducer'
import { useDispatch } from 'react-redux'
const flag = "https://img.icons8.com/color/48/000000/kenya-circular.png";

const OrgzLocationDetails = () => {
    const dispatch = useDispatch()
    const [countryId, setcountryId] = useState('')
    const [city, setcity] = useState('')
    const [postalAddress, setpostalAddress] = useState('')
    const [addressLineOne, setaddressLineOne] = useState('')
    const [addressLineTwo, setaddressLineTwo] = useState('')
    const [email, setemail] = useState('')
    const [website, setwebsite] = useState('')
    const [logoUrl, setlogoUrl] = useState('')


    const [countryList, setcountryList] = useState([])

    const handleDispatch = (e)=>{
        if(countryId&&city&&postalAddress&&addressLineOne&&addressLineTwo&&email&&website&&logoUrl&&e){
            dispatch(orgDataUpdate({countryId, city, postalAddress, addressLineOne, addressLineTwo, email, website, logoUrl, phone:e, active: true}))
            dispatch(errorUpadate(false))
        }
    }

    useEffect(()=>{
        dispatch(errorUpadate(true));
        
        (async()=>{
            let BStypes = await fetchCountry()
            let list =[]
            BStypes.forEach(type=>{
                let {countryId, name, description}=type;
                list.push({id:name, value:countryId, description})})
                
            setcountryList(list)
          })()
    }, [])
  return (<Grid container component={'form'} maxWidth={450} spacing={2} m='20px auto'>
            <Grid item xs={6} sm={4}>
                <SelectOne label='Country' list={countryList} focus={true} callback={setcountryId}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={city}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='City'
                        placeholder='Nairobi'
                        onChange={e=>setcity(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={postalAddress}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Postal Address'
                        placeholder='1234-001'
                        onChange={e=>setpostalAddress(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} >
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={addressLineOne}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Address Line One'
                        placeholder='address'
                        onChange={e=>setaddressLineOne(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} >
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={addressLineTwo}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Address Line Two'
                        placeholder='address'
                        onChange={e=>setaddressLineTwo(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} >
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={email}
                        size='small'
                        type='email'
                        InputLabelProps={{shrink:true}}
                        label='Organization Email'
                        placeholder='organization email'
                        onChange={e=>setemail(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} >
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={website}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Organization Website'
                        placeholder='organization website'
                        onChange={e=>setwebsite(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} sm={5}>
                <TextField required
                        variant='outlined'
                        fullWidth
                        value={logoUrl}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Organization Logo'
                        placeholder='paste a url'
                        onChange={e=>setlogoUrl(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={4} sm={3}sx={{mt: '5px'}}>
                <Chip 
                avatar={<Avatar alt="" src={flag} />}
                label="+254" />
            </Grid>
            
            <Grid item xs={8} sm={4} >
                <TextField  InputLabelProps={{ shrink: true }}
                            required
                            fullWidth
                            label="Mobile Number"
                            placeholder='712345678'
                            type="number"
                            size="small"
                            onChange={(e)=>{handleDispatch(e.currentTarget.value.trim())}}/>
                
            </Grid>
            
        </Grid>
  )
}

export default OrgzLocationDetails

