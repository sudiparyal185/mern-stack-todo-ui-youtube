import React, { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
  StyledButtonContainer,
} from "../Register/Register.styled";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

const Login = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitData = (e) => {
    e.preventDefault();
  };

  const { email, password } = registerData;
  return (
    <>
      <StyledContainer>
        <StyledFormHeader>
          <h1>
            <LoginIcon />
            Login
          </h1>
          <p>Please login to your account</p>
        </StyledFormHeader>
        <StyledFormContainer>
          <form onSubmit={submitData}>
            <StyledInputContainer>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={handleChange}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='Enter password'
                onChange={handleChange}
              />
            </StyledInputContainer>
            <StyledButtonContainer>
              <Button
                disabled={email === "" || password === ""}
                variant='contained'
                color='primary'
                type='submit'
              >
                Submit
              </Button>
            </StyledButtonContainer>
          </form>
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
