import * as yup from "yup";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import EditProfileSchema from "./EditProfileSchema";
import axios from 'axios'
import NavBar from "./NavBar";


const initialFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const initialFormErrors = {
  email: "",
  password: "",
  confirmPassword: "",
};

const StyledProfile = styled.div`
  position: absolute;
  width: 570px;
  height: 305px;
  left: 435px;
  top: 265px;

  background: #ffffff;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);

  h2 {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 23px;
    color: #224229;
    margin-bottom: 4%;
    margin-top: 3%;
    text-align: center;
  }

  h3 {
    margin: 1%;
  }

  div {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 23px;
    color: #5faa6f;
    text-align: center;
    margin: 1%;
  }

  button {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    align-items: center;
    background: #548a60;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 10px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
`;

const EditProfile = (props) => {
  const history = useHistory();

  const [profileValues, setProfileValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  axios
    .get(`https://water-my-plants-tt14.herokuapp.com/api/users`)
    .then((res) => {
      const password = res.data.password;
      console.log(password);
    })
    .catch((error) => {
      console.log(error);
    });

  const handleChanges = (e) => {
    yup
      .reach(EditProfileSchema, e.target.name)
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
    setProfileValues({
      ...profileValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water-my-plants-tt14.herokuapp.com/api/users",
        profileValues
      )
      .then((res) => {
        console.log("resp", res, res.data);
        // localStorage.setItem("token", res.data.token)
        history.push("/");
      })
      .catch((error) => console.log({ error }));
  };

  console.log(profileValues);


return(
  <div>
  <NavBar />
    <StyledProfile>
    <form onSubmit={submitForm}>
      <h2>Edit Profile</h2>
      <div>
        
        <h3>Change Email</h3>
          <label>
            <input
              name="email"
              placeholder="New Email"
              type="email"
              value={profileValues.email}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.email}</p>
        
        
        <h3>Change Password</h3>
          <label>
            <input
              name="password"
              placeholder="New Password"
              type="password"
              value={profileValues.password}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.password}</p>
          <label>
            <input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              value={profileValues.confirmPassword}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.confirmPassword}</p>
        
      </div>
      <div>
        <button type="submit">Save Changes</button>
      </div>
      </form>
      </StyledProfile>
      </div>
)
}


export default EditProfile;
