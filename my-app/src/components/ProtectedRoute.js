import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {

  return(
    <Route {...rest} render={(props) => {
      if(localStorage.getItem("token")) {
        return <Component />
      } else {
        return <Redirect to="/login" state={props.location}/>
      }
    }}
    />
  )
}

export default ProtectedRoute; 