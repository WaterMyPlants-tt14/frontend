import React from 'react'
import styled from "styled-components";
import { NavLink, useHistory } from 'react-router-dom'
const NavBar = ({isLoggedIn, userLogout}) => {
  const history = useHistory()

  const handleLogout = (e) => {
    e.preventDefault()

    history.push('/')
    console.log('lgout')
  }
  
  if(isLoggedIn){
    return(
      <NavStyle>
      <div>
        <TitleStyle>Water My Plants</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/addplants">Add Plants</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/collection">My Plants</NavLink>
        </div>
        {/* route for edit profile page still being made */}
        {/* <div>
          <NavLink activeClassName="active" to="/profile">My Account</NavLink>
        </div> */}
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
        <div>
          <NavLink exact activeClassName="active" to="/profile">Profile</NavLink>
        </div>
      </LinksStyle>
    </NavStyle>
    )
  }
  return (
    <NavStyle>
      <div>
        <TitleStyle>Water My Plants</TitleStyle>
      </div>
      <LinksStyle>
        <div>
          <NavLink exact activeClassName="active" to="/home">Home</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/collection">My Plants</NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/profile">Profile</NavLink>
        </div>
      </LinksStyle>
    </NavStyle>
  );
};
export default NavBar;
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
  justify-content: space-between;
  ::marker {
    display: none;
  }
`;