import React, {useEffect, useState} from 'react'
import { Grid, TextField } from '@mui/material'
import SelectOne from './selectOne'
import { fetchBStypes, fetchCurrency, fetchOrgtypes } from '../services/requests'
import { useDispatch } from 'react-redux';
import { orgDataUpdate} from '../redux/reducers/signupReducer';
import { errorUpadate } from '../redux/reducers/errorReducer';
const Organization = () => {
    const dispatch = useDispatch();

    const [list, setlist] = useState([])
    const [Orglist, setOrglist] = useState([])
    const [currencylist, setcurrencylist] = useState([])

    const [businessTypeId, setbusinessTypeId] = useState('')
    const [orgTypeId, setorgTypeId] = useState('')
    const [currencyId, setcurrencyId] = useState('')
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [clientId, setclientId] = useState('')

    

    const handledispatch = (e)=>{
      if(businessTypeId&&orgTypeId&&currencyId&&name&&description&&clientId&&e){
        dispatch(orgDataUpdate({businessTypeId, orgTypeId, currencyId, name, description, clientId: parseInt(clientId), value:e}))
        dispatch(errorUpadate(false))
      }
    }
    useEffect(() => {

      dispatch(errorUpadate(true));

      (async()=>{
        let BStypes = await fetchBStypes()
        let list =[]
        BStypes.forEach(type=>{
            let {businessTypeId, value, description}=type;
            list.push({id:value, value:businessTypeId, description})})
            
        setlist(list)
      })();
      (async()=>{
        let BStypes = await fetchOrgtypes()
        let list =[]
        BStypes.forEach(type=>{
            let {orgTypeId, value, description}=type;
            list.push({id:value, value:orgTypeId, description})})
            
        setOrglist(list)
      })();
      (async()=>{
        let BStypes = await fetchCurrency()
        let list =[]
        BStypes.forEach(type=>{
            let {currencyId, isoCode, description}=type;
            list.push({id:isoCode, value:currencyId, description})})
            
        setcurrencylist(list)
      })()
    }, [])
    
  return (<Grid container component={'form'} maxWidth={450} spacing={2} m='20px auto'>
            <Grid item xs={12}>
                <TextField required
                        autoFocus
                        value={name}
                        variant='outlined'
                        fullWidth
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Organization Name'
                        placeholder='organization name'
                        onChange={e=>setname(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={12}>
                <TextField required
                        multiline
                        minRows={2}
                        variant='outlined'
                        fullWidth
                        value={description}
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Organization Desc'
                        placeholder='organization description'
                        onChange={e=>setdescription(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <TextField  required
                            type={'number'}
                            size='small'
                            value={clientId}
                            label='Client ID'
                            InputLabelProps={{shrink: true}}
                            placeholder='default 1'
                            onChange={e=>setclientId(e.currentTarget.value.trim())}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <SelectOne label='Business Type' list={list} callback={setbusinessTypeId}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <SelectOne label='Organization Type' list={Orglist} callback={setorgTypeId}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <SelectOne label='Currency' list={currencylist} callback={setcurrencyId}/>
            </Grid>
            <Grid item xs={6} sm={8}>
                <TextField required
                        variant='outlined'
                        fullWidth
                        size='small'
                        InputLabelProps={{shrink:true}}
                        label='Value'
                        placeholder='PCS'
                        onChange={e=>handledispatch(e.currentTarget.value)}/>
            </Grid>
        </Grid>
  )
}

export default Organization