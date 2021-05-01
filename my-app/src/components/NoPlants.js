import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
h1{
    margin-top: 1rem;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    color: #224229;
    border-bottom: 2px solid #224229;
    align-self: center;
}
`

const StyledButton = styled.button`
    
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
  

`
const NoPlants = () => {
    const {push} = useHistory()

    return(
        <StyledDiv>
            <h1>Looks like you don't have any plants</h1>
            <StyledButton onClick={() => {push('/addplant')}}>Add a Plant</StyledButton>
        </StyledDiv>
    )
}
export default NoPlants
