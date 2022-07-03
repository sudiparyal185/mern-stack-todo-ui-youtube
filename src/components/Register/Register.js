import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
  StyledButtonContainer,
} from "./Register.styled";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
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

  const { name, email, password, confirmedPassword } = registerData;
  return (
    <>
      <StyledContainer>
        <StyledFormHeader>
          <h1>
            <PersonIcon />
            Register
          </h1>
          <p>Please create an account</p>
        </StyledFormHeader>
        <StyledFormContainer>
          <form onSubmit={submitData}>
            <StyledInputContainer>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Enter your name'
                onChange={handleChange}
              />
            </StyledInputContainer>
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
            <StyledInputContainer>
              <input
                type='password'
                id='confirmedPassword'
                name='confirmedPassword'
                value={confirmedPassword}
                placeholder='Confirm password'
                onChange={handleChange}
              />
            </StyledInputContainer>
            <StyledButtonContainer>
              <Button
                disabled={
                  name === "" ||
                  email === "" ||
                  password === "" ||
                  confirmedPassword === ""
                }
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

export default Register;
