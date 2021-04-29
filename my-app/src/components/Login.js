import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import LoginSchema from "./LoginSchema";
import axios from 'axios'



const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};



const Login = (props) => {

  const history = useHistory()

  const [loginValues, setLoginValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  //still need to disable with if statement but v sleepy
  useEffect(() => {
    LoginSchema.isValid(loginValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [loginValues])

  const handleChanges = e => {
    yup.reach(LoginSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0]
        })
      })
      setLoginValues({
        ...loginValues,
        [e.target.name]: e.target.value
      })
  }
  const submitForm = (e) => {
    e.preventDefault()
    axios
    .post("https://water-my-plants-tt14.herokuapp.com/api/auth/login", loginValues)
    .then((res) => {
      console.log("login resp", res, res.data)
      //setLoginValues(initialFormValues)
      localStorage.setItem("token", res.data.token)
      // localStorage.setItem("userId", res.data.user.user_id )
      history.push("/collection")

      }
      
      )
    .catch(error => console.log({error}))
  }

return(
  <StyledLogin>
  <StyledLoginForm className="loginformcontainer" 
  onSubmit={submitForm}>
      <h2>Login</h2>
      <div>
        
          <label>
            Email
            <input
              name="email"
              placeholder="email@email.com"
              type="email"
              value={loginValues.email}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.email}</p>
        
        
          <label>
            Password
            <input
              name="password"
              placeholder="password"
              type="password"
              value={loginValues.password}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.password}</p>

        
      </div>
      <button type="submit" disabled={disabled}>Log In</button>

    </StyledLoginForm>
  </StyledLogin>
)
}

//styling for loginform 
  const StyledLogin = styled.div`
    background: #E5E5E5;
  `
const StyledLoginForm = styled.form`
    position: absolute;
    width: 570px;
    height: 305px;
    left: 435px;
    top: 265px;

    background: #FFFFFF;
    box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);

    h2{
    font-family: ${pr => pr.theme.fontFamily};
    white-space: ${pr => pr.theme.whiteSpace};
    color: ${pr => pr.theme.fontColor};
    font-weight: ${pr => pr.theme.fontWeight};
    }
  input{
    }
  button{
    color: ${pr => pr.theme.fontColor};
    white-space: ${pr => pr.theme.whiteSpace};
    background-color: ${pr => pr.theme.primaryColor};
  }

span{
    color: ${pr => pr.theme.errorColor};
    white-space: ${pr => pr.theme.whiteSpace};
}
`
export default Login;

