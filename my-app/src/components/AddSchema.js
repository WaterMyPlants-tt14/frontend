import * as yup from 'yup'

const addSchema = yup.object().shape({
    plant_nickname: yup.string().required('Plant name is required'),
    plant_location: yup.string().required(' Location is required'),
    water_day: yup.string().oneOf(['1',"2","3","4","5","6","7"],"required"),
    notes: yup.string().required("Must have notes for some reason"),
})

export default addSchema