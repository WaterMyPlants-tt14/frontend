import * as yup from "yup";
import React, { useEffect, useState } from "react";
import SignUpSchema from "./SignUpSchema";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import SignInNavBar from "./SignInNavBar";
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",

  phone: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  number: "",
};
const SignUp = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const { push } = useHistory()

  useEffect(() => {
    SignUpSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleChanges = (e) => {
    yup
      .reach(SignUpSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
}
const submitForm = (e) => {
  e.preventDefault()
  const data = {name: formValues.name, email: formValues.email, password: formValues.password, phone: formValues.phone,}
  axios
  .post("https://water-my-plants-tt14.herokuapp.com/api/auth/register", data)
  .then((resObj) => {
    console.log("signup res", resObj)
    history.push("/login")
    //route to plant collection
  })
  .catch(err => console.log({err}))
}
return (
  <div className="signup">
    <SignInNavBar />
  <StyledSignUpForm className="signupformcontainer" onSubmit={submitForm}>
    <StyledTitle>Sign Up</StyledTitle>
    <StyledForm>
      <label>
        <input
          name="name"
          style={{
            width: '480px',
            paddingLeft: "4px",
            height: "60px",
            fontSize: "17px",
            color: "#224229",
            fontWeight: "bold",
            fontFamily: "PT Serif",
            fontStyle: "normal",
            borderBottom: "3px solid #224229"
          }}
          placeholder="name"
          type="text"
          value={formValues.name}
          onChange={handleChanges}
        />
      </label>
      <p>{formErrors.name}</p>
      <label>
        <input
          name="phone"
          style={{
            width: '480px',
            paddingLeft: "4px",
            height: "60px",
            fontSize: "17px",
            color: "#224229",
            fontWeight: "bold",
            fontFamily: "PT Serif",
            fontStyle: "normal",
            borderBottom: "3px solid #224229"
          }}
          placeholder="phone number"
          type="text"
          value={formValues.phone}
          onChange={handleChanges}
        />
      </label>
      <p>{formErrors.phone}</p>
      <label>
        <input
          name="email"
          style={{
            width: '480px',
            paddingLeft: "4px",
            height: "60px",
            fontSize: "17px",
            color: "#224229",
            fontWeight: "bold",
            fontFamily: "PT Serif",
            fontStyle: "normal",
            borderBottom: "3px solid #224229"
          }}
          placeholder="email@email.com"
          type="text"
          value={formValues.email}
          onChange={handleChanges}
        />
      </label>
      <p>{formErrors.email}</p>
      <label>
        <input
          name="password"
          style={{
            width: '480px',
            paddingLeft: "4px",
            height: "60px",
            fontSize: "17px",
            color: "#224229",
            fontWeight: "bold",
            fontFamily: "PT Serif",
            fontStyle: "normal",
            borderBottom: "3px solid #224229"
          }}
          placeholder="password"
          type="password"
          value={formValues.password}
          onChange={handleChanges}
        />
      </label>
      <p>{formErrors.password}</p>
      <label>
        <input
          name="confirmPassword"
          style={{
            width: '480px',
            paddingLeft: "4px",
            height: "60px",
            fontSize: "17px",
            color: "#224229",
            fontWeight: "bold",
            fontFamily: "PT Serif",
            fontStyle: "normal",
            borderBottom: "3px solid #224229"
          }}
          placeholder="confirm password"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChanges}
        />
      </label>
      <p>{formErrors.confirmPassword}</p>
      <StyledBox> 
        <button disabled={disabled} type="submit">Sign Up</button>
        <div className='in'>
          <h4>Already have an account? </h4>
          <h5 className='signIn' onClick={() => {push('/login')}}> Sign in.</h5>
        </div>

        </StyledBox>
      </StyledForm>
    </StyledSignUpForm>
    </div>
  );
};
const StyledSignUpForm = styled.form`
  position: absolute;
  width: 570px;
  height: 589px;
  left: 435px;
  top: 265px;
  background: #ffffff;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
  padding-left: 20px;

  `
  const StyledTitle = styled.h2`
    width: 490px;
    height: 37px;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 37px;
    color: #224229;
    
  `
  const StyledForm = styled.div`
  & p{
    color: red;
  }
  & button{
    width: 232px;
    height: 54px;
    background: #548A60;
    margin-top: 5px;

    &:hover{
      color: white;
      cursor: pointer;
    }
  }
  input[type=text], input[type=password]{
    border:none;
  }
`
const StyledBox = styled.div`
  display: flex;

  & .in{
    display: flex;
    justify-content: space-between;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 80px;
    padding-left: 20px;
    color: #B1B7B3;

    & .signIn{
      margin-left: 5px;
      color: black;
      &:hover{
        cursor: pointer;
      }
    }
  }
`

export default SignUp;
