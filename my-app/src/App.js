import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import PlantCollection from "./components/PlantCollection";
import SpeciesList from "./components/SpeciesList";
import { Route } from "react-router-dom";
import NoPlants from "./components/NoPlants";
import IndividualPlant from "./components/IndividualPlant";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute path="/editprofile" component={EditProfile} />
      <ProtectedRoute path="/profile" component={Profile} />

      <ProtectedRoute path="/home" component={Home} />
      <ProtectedRoute path="/collection" component={PlantCollection} />

      <ProtectedRoute path="/addplant" component={SpeciesList} />
      <ProtectedRoute path="/no-plants" component={NoPlants} />
      <ProtectedRoute path="/individual-plant" component={IndividualPlant} />
    </div>
  );
}

export default App;
