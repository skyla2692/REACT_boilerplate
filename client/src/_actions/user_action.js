import axios from 'axios';
import{
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'

export function loginUser(dataToSubmit){
    const request =  axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

    return {
        // reducer로 보내기
        type: "LOGIN_USER",
        payload: request
    }
}

export function registerUser(dataToSubmit){
    const request =  axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

    return {
        // reducer로 보내기
        type: "REGISTER_USER",
        payload: request
    }
}


export function auth(dataToSubmit){
    const request =  axios.get('/api/users/auth')
    .then(response => response.data)

    return {
        // reducer로 보내기
        type: "AUTH_USER",
        payload: request
    }
}