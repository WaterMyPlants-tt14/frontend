import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

const EditPlantContainer = styled.div`
  width: 275px;
  height: 100%;
  padding: 20px;
`;

const SubmitChanges = styled.button`
  width: 200px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #548a60;
`;
const DeletePlant = styled.button`
  width: 200px;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #b23a3a;
`;

const initialFormValues = {
  plant_nickname: "",
  water_schedule: 0,
  notes: "",
  plant_location: "",
  species_id: 0,
};
//user_plant_id for specific plant

const EditPlant = (plants) => {
  const { plant, abracadabra, setTakeMeBack, takeMeBack } = plants;
  const [formValues, setFormValues] = useState({
    ...initialFormValues,
    user_plant_id: plant.user_plant_id,
  });

  const changer = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const deleter = (e) => {
    e.preventDefault();

    const rightPlant = { user_plant_id: plant.user_plant_id };
    console.log("plantuserplantid", rightPlant);

    axiosWithAuth()
      .delete(`/api/userplants`, { data: rightPlant })
      .then((dundundun) => {
        console.log("deletion success from EditPlant", dundundun);
        abracadabra();
      })
      .catch((err) => {
        console.error("deletion error on EditPlant", err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedPlant = {
      user_plant_id: plant.user_plant_id,
      plant_nickname: formValues.plant_nickname,
      water_day: Number(formValues.water_day),
      notes: formValues.notes,
      plant_location: formValues.plant_location,
      species_id: plant.species_id,
    };

    console.log("plantuserplantid", plant.user_plant_id);

    axiosWithAuth()
      .put(`/api/userplants/`, updatedPlant)
      .then((update) => {
        console.log("update on EditPlant:", update);
        abracadabra();
        setTakeMeBack(!takeMeBack);
      })
      .catch((err) => {
        console.error("error on EditPlant", err);
      });
  };

  return (
    <EditPlantContainer>
      <h1>You've traveled far.... waterer</h1>
      <div className="dynamicPlantValues">
        <form>
          <label htmlFor="plant_nickname">
            <h3>NICKNAME</h3>
          </label>
          <input
            type="text"
            value={formValues.plant_nickname}
            onChange={changer}
            name="plant_nickname"
            placeholder={plant.plant_nickname}
          ></input>

          <label htmlFor="water_day">
            <h3>Start Watering</h3>
          </label>

          <select
            name="water_day"
            id="water_day"
            value={formValues.water_day}
            onChange={changer}
          >
            <option value={null}>Choose a day</option>
            <option value={1}>Sunday</option>
            <option value={2}>Monday</option>
            <option value={3}>Tuesday</option>
            <option value={4}>Wednesday</option>
            <option value={5}>Thursday</option>
            <option value={6}>Friday</option>
            <option value={7}>Saturday</option>
          </select>

          <label htmlFor="notes">
            <h3>NOTES</h3>
          </label>
          <input
            type="text"
            value={formValues.notes}
            onChange={changer}
            name="notes"
            placeholder={plant.notes}
          ></input>
          <label htmlFor="plant_location">
            <h3>PLANT LOCATION</h3>
          </label>
          <input
            type="text"
            value={formValues.plant_location}
            onChange={changer}
            name="plant_location"
            placeholder={plant.plant_location}
          ></input>

          <div className="EditButtons">
            <SubmitChanges onClick={onSubmit}>SAVE CHANGES</SubmitChanges>
            <DeletePlant onClick={deleter}>DELETE FROM COLLECTION</DeletePlant>
          </div>
        </form>
      </div>
    </EditPlantContainer>
  );
};

export default EditPlant;
