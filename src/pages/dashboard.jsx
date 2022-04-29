import React from 'react'
import { Box, Typography, Grid, Button} from '@mui/material'

let user = JSON.parse(localStorage.getItem('user'))
const Dashboard = () => {
  return (<Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <Box sx={{display: 'flex', gap: '20px'}}>
                <Button variant='contained'>create invoice</Button>
            </Box>
  </Box>
  )
}

export default Dashboard