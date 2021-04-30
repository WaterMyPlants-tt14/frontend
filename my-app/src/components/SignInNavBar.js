import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

const SignInNavBar = () => {

  return(
    <NavStyle>
      <div>
        <TitleStyle>Water My Plants</TitleStyle>
      </div>
      <LinksStyle>

        <div>
          <NavLink activeClassName="active" to="/login">Already Have an Account? Login </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/signup"> Sign Up</NavLink>
        </div>

      </LinksStyle>
    </NavStyle>

  )
}

export default SignInNavBar

const NavStyle = styled.nav`
  background-color: #1d2e05;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5rem;
  
  a,button{
    text-decoration: none;
    padding: 2px 5px;
    color: white;
    font-size: .9rem;
    background: none!important;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    transition: ease-in 500ms all;
    &:hover{
      background-color: orange!important;
    }
  }
  .active{
    color: white;

  }
`;
const TitleStyle = styled.p`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1%;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serifs;
`;
const LinksStyle = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serifs;
  justify-content: space-around;
  padding: .5rem;
  ::marker {
    display: none;
  }
`;