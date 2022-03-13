import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RegisterContractForm from './RegisterContractForm';
import Review from './Review';
import { orange } from '@mui/material/colors';
import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { showPopup } from '../../features/contractSlice';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Register contract', 'Review contract'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RegisterContractForm/>;
  }
}

const theme = createTheme({
  status: {
    danger: orange[123]
  }
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const openPopup = useSelector(state => state.contract.value);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="flex-end">
        <IconButton onClick={() => dispatch(showPopup())}>
          <CloseIcon/>
        </IconButton>
      </Grid>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="" sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <RegisterContractForm/>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
