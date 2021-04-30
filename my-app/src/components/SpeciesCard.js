import React, { useState } from "react";
import styled from "styled-components";
import AddPlant from "./AddPlant";

//STYLING
const CardContainer = styled.div`
  margin: 20px;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
  display: flex;
  flex-wrap: nowrap;
`;
const SpeciesContainer = styled.div`
  width: 270px;
  height: 411px;
`;
const PlantImage = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
`;
const PlantDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 15px 10px;
`;
const PlantName = styled.p`
  font-size: 18px;
  font-family: serif; //TODO: change to PT Serif
  font-weight: bold;
  color: 224229;
  margin-top: 15px;
`;
const PlantSpecies = styled.p`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif; //TODO: change to Open Sans
  font-weight: 600;
  font-style: italic;
  color: #bcb6a6;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 3px solid #cbad91;
  width: 100%;
`;
const WaterSchedule = styled.p`
  color: #224229;
  font-size: 15px;
  font-family: serif; //TODO: change to PT Serif
  margin-top: 3px;
`;

const SpeciesCard = (props) => {
  const [active, setActive] = useState(false);
  const {
    plant_image,
    plant_name,
    plant_scientific_name,
    species_id,
    water_schedule,
  } = props.plant;

  return (
    <CardContainer>
      <SpeciesContainer onClick={() => setActive(!active)}>
        <PlantImage src={plant_image} alt={plant_name} />
        <PlantDetails>
          <PlantName>{plant_name}</PlantName>
          <PlantSpecies>{plant_scientific_name}</PlantSpecies>
          <h3>Watering Schedule</h3>
          <WaterSchedule>{water_schedule}</WaterSchedule>
        </PlantDetails>
      </SpeciesContainer>
      {active && <AddPlant species_id={species_id} />}
    </CardContainer>
  );
};

export default SpeciesCard;
