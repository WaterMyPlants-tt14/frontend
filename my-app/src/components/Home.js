import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const StyledHome = styled.div`
  position: absolute;
  width: 570px;
  height: 589px;
  left: 435px;
  top: 265px;

  background: #ffffff;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
`;

const StyledPika = styled.div`
  width: 550px;
  height: 550px;
  margin: 0 0 0 6%;
  background-image: url("https://i.pinimg.com/originals/00/20/e7/0020e7f57ca166466a1ec5e409928125.gif");
  background-repeat: no-repeat;
`;

const Home = () => {
  return (
    <div>
      <NavBar />
      <StyledHome>
        <div class="home">
          <h1>WMP 💦</h1>
          <p>keep up with your plants :D</p>
          <StyledPika>.</StyledPika>
        </div>
      </StyledHome>
    </div>
  );
};

export default Home;
