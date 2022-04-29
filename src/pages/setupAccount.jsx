import React, { useState } from 'react'
import { Box, Stepper, Step, StepLabel, StepContent, Typography, Paper, Button } from '@mui/material'
import Signup from '../components/signup';
import Organization from '../components/organization';
import OrgzLocationDetails from '../components/orgzLocationDetails';
import SnackBar from '../components/snackBar';
import { useSelector } from 'react-redux';
import { postSignUp } from '../services/requests';
import { useNavigate } from 'react-router-dom';
const steps = ['Personal details', 'Organization details','Organzation Location Details'];

const SetupAccount = () => {
    const navigate = useNavigate()
    const error = useSelector(state=>state.error)
    const user = useSelector(state=>state.signupData)
    const [activeStep, setActiveStep] = useState(0);
    const [displayerror, setdisplayerror] = useState(false)
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const handleerror =(index)=>{
      setdisplayerror(false)
      if(index===steps.length-1&&!error){
        postSignUp({...user, roles:[], logoUrl: "", organization:{...user.organization, organizationId: Date.now()}}).then(res=>{if(res){navigate('/login')}});
        
      }else{
        if (error) {
          setdisplayerror(true)
        }else{
          handleNext()
        }
      }
      
    }
  return (<Box sx={{ maxWidth: 400, margin: '20px auto' }}>
      <Typography variant='h5' color='primary' sx={{fontWeight: 600}}>sign up</Typography>

  {displayerror? (<SnackBar message='please fill up all the fields'/>): ""}
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={step}>
          <StepLabel
            optional={
              index === steps.length-1 ? (
                <Typography variant="caption">Last step</Typography>
              ) : null
            }
          >
            {step}
          </StepLabel>
          <StepContent>
              { (() => {
                switch(index){
                    case 0: return <Signup/>
                    case 1: return <Organization/>
                    case 2: return <OrgzLocationDetails/>
                    // case 3: return <Passwords/>
                    default: return ""
                }
            })()}
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={()=>handleerror(index)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      ))}
    </Stepper>
    {activeStep === steps.length && (
      <Paper square elevation={0} sx={{ p: 3 }}>
        <Typography>All steps completed - you&apos;re finished</Typography>
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
        </Button>
      </Paper>
    )}
  </Box>

  )
}

export default SetupAccount
