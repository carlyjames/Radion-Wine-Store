import React from "react";
import './Signup.css'

import Days from "./BirthdayData";
import Months from "./BirthdayMonth";
import Years from "./BirthdayYears";

import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material/Input";
import  InputLabel  from "@mui/material/InputLabel";
import  InputAdornment  from "@mui/material/InputAdornment";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { AccountCircle } from "@mui/icons-material/AccountCircle";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { MenuItem } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from "@mui/material/Button";


import { Card, Form, Alert } from "react-bootstrap";

import { useRef } from "react";
import { UseAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

function generateYears(startYears) {
  let currentYear = new Date().getFullYear(),
  years = [];
  startYears = startYears || 1800

  while( startYears <= currentYear ){
    years.push(startYears++)
  }
  return years
}
const years = generateYears().reverse()




export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { Signup, currentUser } = UseAuth();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await Signup(emailRef.current.value, passwordRef.current.value);
      history("/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const [Month, setMonth] = React.useState(0);
  const [Day, setDay] = React.useState(0);
  const [Year, setYear] = React.useState(0);

  const handleMonthChanged = (event) => {
    setMonth(event.target.value);
  };
  const handleDayChanged = (event) => {
    setDay(event.target.value);
  };
  const handleYearChanged = (event) => {
    setYear(event.target.value);
  };

  const border  = {
      border : '1px solid #D3D3D3' ,
      borderRadius : '0.2rem'
  }    
  
  const SelectFieldStyle = {
    padding: 7,
    fontSize: "0.75rem",
  };


  return (
    <>

      {/* <Box className="form" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      </Box> */}
      


      <Form onSubmit={handleSubmit} className="row g-3 form-holder shadow-lg">
        <h1>Sign up</h1>

        {/* text inputs */}
        <div class="col-md-6 ">
          <TextField className="form-control " type='text'   required id="standard" label="First name"   />
        </div>

        <div class="col-md-6">
          <TextField className="form-control" required id="standard" label="Last name"  />
        </div>
        <div class="col-12">
          <TextField type='ema' className="form-control" ref={emailRef} required id="standard" label="Mobile number or Email"  />
        </div>
        <div className="col-12">
          <FormControl className="col-12" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput id="outlined-adornment-password" ref={passwordRef} defaultValue={'hello'} type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          
        </div>

        {/* birthday */}
        <FormLabel  className="mx-2"><small>Birthday <HelpIcon style={{ fontSize : '14px' }} />  </small> </FormLabel>
        <div className="col-md-4 ">
          <TextField className="w-100" id="outlined-select-currency" select label="Month" value={Month} onChange={handleMonthChanged} sx={{width: 3000}}  >    
            {Months.map((option) => (
              <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-md-4">
          <TextField className="w-100"  id="outlined-select-currency" select label="Day" value={Day} onChange={handleDayChanged}  >    
            {Days.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-md-4">
          <TextField className="w-100" id="outlined-select-currency" select label="Year" value={Year} onChange={handleYearChanged}  >    
            {years.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
              
              ))}
          </TextField>
        </div>
        

        {/* gender */}
        <FormLabel  className="mx-2"><small>Gender <HelpIcon style={{ fontSize : '14px' }} />  </small> </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          className="g-3"
          
        >
          <div className="col-md-4">
            <FormControlLabel className="w-100 mx-1 " style={border} value="female" control={<Radio />} label="Female" />
          </div>
          <div className="col-md-4">
            <FormControlLabel className="mx-3 px-3" style={border} value="male" control={<Radio />} label="Male" />
          </div>
          <div className="col-md-4">
          <FormControlLabel className="w-100 mx-1" style={border} value="other" control={<Radio />} label="Other" />

          </div>
        </RadioGroup>



      <div className="w-100 text-left mt-2 text-black-50" style={{ fontSize : '14px' }}>
        By signing up you agree to our terms.Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy. You may receive SMS Notification from us and can opt out any time.
      </div>




      <div className="d-flex align-items-center justify-content-center mt-2 w-100 row">
        <Button disabled={loading} variant="contained" className=" col-sm-6">Signup</Button>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/login">Login</Link>
      </div> 
      </Form>


          
        
    </>
  );
}
