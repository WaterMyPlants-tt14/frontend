import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string()
    .email().required("Valid email is required"),
    password: yup.string().min(4).required('Password is required'),
})

export default LoginSchema