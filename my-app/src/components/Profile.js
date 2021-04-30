import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const StyledProfile = styled.div`
position: absolute;
width: 570px;
height: 305px;
left: 435px;
top: 265px;

background: #FFFFFF;
box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);

h1{
left: 475px;
top: 305px;
font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 37px;
color: #224229;
margin: 4% 0% 4% 4%;
}

h2{
font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 23px;
color: #224229;
margin-bottom: 4%;
text-align: center;
}

div{
font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 23px;
color: #5FAA6F;
text-align: center;
}

button{
    
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-left: 235px;
    align-items: center;
    background: #548A60;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 10px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
}
`



const Profile = () => {
    const [info, setInfo] = useState([]) 

    axios.get(`https://water-my-plants-tt14.herokuapp.com/api/users`)
        .then(res => {
            setInfo(res.data);
        })
        .catch((error) => {
          console.log(error)
        });


    return (
        <div>
        <NavBar />
        <StyledProfile>
            <h1>Hi {info.name}</h1>
            <br></br>
            <h2>Here's Your Current Info</h2>
            <div>Email: {info.email}</div>
            <div>Phone: {info.phone}</div>
            <Link to={"./editprofile"}>
                <button>Edit Profile</button>
            </Link>
        </StyledProfile>
        </div>
    )
}

export default Profile