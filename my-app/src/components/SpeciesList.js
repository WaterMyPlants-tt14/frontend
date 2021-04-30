import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

//Component Import
import SpeciesCard from './SpeciesCard';

//Styling
const StyledDiv = styled.div `
    h2{
        margin-top: 1rem;
        margin-left: 4rem;
        font-family: Amatic SC;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        color: #224229;
        //border-bottom: 2px solid #224229;
        text-decoration: underline;
        
    }
`
const PlantCardContainer = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const SpeciesList = () => {
    const [ species, setSpecies ] = useState([]);
    const [ loading, setIsLoading ] = useState(true);

    useEffect(() => {
        axios.get("https://water-my-plants-tt14.herokuapp.com/api/species")
            .then(res => {
                setSpecies(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);

    return (
        <StyledDiv>
            <div>
                <NavBar />
                <h2>Add A Plant</h2>
            </div>
            <PlantCardContainer>
                {
                    loading
                    ? "Loading Plant Species..." 
                    : species.map(plant => {
                        return (
                            <SpeciesCard key={plant.species_id} plant={plant}/>
                        )
                    })
                }
            </PlantCardContainer>
        </StyledDiv>
    )
};

export default SpeciesList;
