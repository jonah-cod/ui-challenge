import React, {useState} from 'react'
import { TextField, MenuItem } from '@mui/material'
 
const SelectOne = ({list, label, callback, focus}) => {
    const [value, setvalue] = useState('')
  return (
    <TextField
    InputLabelProps={{ shrink: true }}
        autoFocus={focus}
        select
        required
        value={value}
        fullWidth
        onChange={e=>{setvalue(e.target.value); callback(e.target.value)}}
        label={label}
        size="small">
            {list.map(option=>(
                <MenuItem key={option.id} value={option.value}>
                    {option.description}
                </MenuItem>
            ))}
    </TextField>
  )
}

export default SelectOne