import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import addSchema from "./AddSchema";
import * as yup from "yup";

const ErrorMessage = styled.p`
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: red;
`;

//STYLING
const AddPlantContainer = styled.div`
  width: 275px;
  height: 100%;
  padding: 20px;
`
const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid green;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: lightgray;
  }
`

const initialFormValues = {
  plant_nickname: "",
  plant_location: "",
  water_day: 0,
  notes: "",
};

const initialFormErrors = {
  plant_nickname: "",
  plant_location: "",
  water_day: 0,
  notes: "",
};

const AddPlant = (props) => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { species_id } = props;
  const [formValues, setFormValues] = useState({
    ...initialFormValues,
    species_id: species_id,
  });

  const changeHandler = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    yup
      .reach(addSchema, evt.target.name)
      .validate(evt.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: "",
        });
        console.log("changehandler", formValues.plant_nickname);
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: err.errors[0],
        });
      });
  };

  console.log(formValues.plant_nickname);
  const submitter = (evt) => {
    evt.preventDefault();
    const newPlantData = {
      species_id: species_id,
      plant_nickname: formValues.plant_nickname.trim(),
      plant_location: formValues.plant_location.trim(),
      water_day: Number(formValues.water_day),
      notes: formValues.notes.trim(),
    };

    axiosWithAuth()
      .post(`/api/userplants`, newPlantData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ "AddPlant err:": err });
      });
  };

  return (
    <AddPlantContainer>
      <form onSubmit={submitter}>
        {formErrors.plant_nickname ? (
          <ErrorMessage>{formErrors.plant_nickname}</ErrorMessage>
        ) : null}
        <label>
          <h3>Nickname</h3>
        </label>
        <Input
          type="text"
          name="plant_nickname"
          value={formValues.plant_nickname}
          onChange={changeHandler}
          placeholder="Plant Nickname"
        ></Input>


        <label>
          <h3>Location</h3>
        </label>
        {formErrors.plant_location ? (
          <ErrorMessage>{formErrors.plant_location} </ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="plant_location"
          value={formValues.plant_location}
          onChange={changeHandler}
          placeholder="Plant Location"
        ></Input>

        <label>
          <h3>Start Watering</h3>
        </label>
        {formErrors.plant_location ? (
          <ErrorMessage>{formErrors.water_day} </ErrorMessage>
        ) : null}
        <select
          name="water_day"
          id="water_day"
          value={formValues.water_day}
          onChange={changeHandler}
        >
          <option value={null}>Choose a day</option>
          <option value={1}>Sunday</option>,<option value={2}>Monday</option>,
          <option value={3}>Tuesday</option>,
          <option value={4}>Wednesday</option>,
          <option value={5}>Thursday</option>,<option value={6}>Friday</option>,
          <option value={7}>Saturday</option>,
        </select>

        <label>
          <h3>Notes</h3>
        </label>
        <Input
          type="text"
          name="notes"
          value={formValues.notes}
          onChange={changeHandler}
          placeholder="Notes..."
        ></Input>
        <br />
        <button>Add Plant</button>
      </form>
    </AddPlantContainer>
  );
};
export default AddPlant;
