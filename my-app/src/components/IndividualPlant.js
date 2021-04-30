import React, {useState} from 'react'
import '../App.css'
import styled from 'styled-components'
import EditPlant from './EditPlant'

const CardContainer = styled.div `
width: 270px;
height: 550px;
box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
`

const PlantEditContainer = styled.div`
    width: 270px;
    height: 411px;


& h2{
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #224229;
}
& h5{
    width: 229px;
    height: 21px;
    left: 0px;
    top: 29px;
    border-bottom: 3px solid #CBAD91;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 160%;
    color: #BCB6A6;
}
& p{
    position: static;
    width: 240px;
    height: 18px;
    left: 0px;
    top: 15px;

    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 120%;
    color: #224229;
}


`

const IndividualPlant = (props) => {
    const [edit, setEdit] = useState(false)
    const {plant, setPlants, setTakeMeBack, takeMeBack} = props

    const abracadabra = () => {
        setEdit(!edit);
    };

    return (
        <CardContainer>
            <PlantEditContainer onClick={() => setEdit(!edit)}>
            <div className='imgContainer'>
                <img src={plant.plant_image} alt='plant'/>
            </div>

            <div className='cardInfo'>
                <h2>{plant.plant_nickname}</h2>
                <h5>{plant.plant_scientific_name}</h5>

                <h3>Watering Schedule</h3>
                <p>{plant.water_schedule} {plant.water_day}</p>

                <h3>Location</h3>
                <p>{plant.plant_location}</p>

                <h3>Notes</h3>
                <p>{plant.notes}</p>

                <button onClick ={abracadabra}> Edit this verdure</button>


            </div>
                {edit && <EditPlant plant={plant} abracadabra={abracadabra} setPlants={setPlants} setTakeMeBack={setTakeMeBack} takeMeBack={takeMeBack}></EditPlant>}
            </PlantEditContainer>
        </CardContainer>
    )
}
export default IndividualPlant