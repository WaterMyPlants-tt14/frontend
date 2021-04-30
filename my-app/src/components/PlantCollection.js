import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NoPlants from "./NoPlants";
import IndividualPlant from "./IndividualPlant";
import styled from "styled-components";
import "../App.css";
import { axiosWithAuth } from "../auth/axiosWithAuth";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  height: 550px;
  margin: auto;
  justify-content: space-between;
  padding: 40px;

  & h3 {
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: green;
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
const Add = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 80px;

  & h2 {
    margin-top: 1rem;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    color: #224229;
    border-bottom: 2px solid #224229;
  }

  & h3 {
    margin-top: 1rem;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #cbad91;
    cursor: pointer;
    transition: ease-in 200ms all;

    &:hover {
      border: solid 2px #cbad91;
      border-radius: 10%;
    }
  }
`;

const PlantCollection = () => {
  const { push } = useHistory();
  const [plants, setPlants] = useState([]);
  const [takeMeBack, setTakeMeBack] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/userplants`)
      .then((res) => {
        setPlants(res.data);
        console.log("RES", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [takeMeBack]);

  return (
    <div className="plants-container">
      {plants.length === 0 ? (
        <NoPlants />
      ) : (
        <>
          <Add>
            <h2> My Plants Collection</h2>
            <h3
              className="btn-add"
              onClick={() => {
                push("/addplant");
              }}
            >
              Add A Plant +
            </h3>
          </Add>

          <Container className="card">
            {plants &&
              plants.map((plant) => (
                <IndividualPlant
                  key={plant.user_plant_id}
                  plant={plant}
                  setPlants={setPlants}
                  setTakeMeBack={setTakeMeBack}
                  takeMeBack={takeMeBack}
                />
              ))}
          </Container>
        </>
      )}
    </div>
  );
};
export default PlantCollection;
