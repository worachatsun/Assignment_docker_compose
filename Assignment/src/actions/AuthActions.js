import axios from 'axios'
import { GET_USER_DATA, USER_LOGOUT } from './types'
import { POST_SIGNIN, POST_REGISTER, GET_USER_DATA_API } from '../api'

export const signIn = data => {
    const { username, password } = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_SIGNIN, {
                username,
                password
            })
            localStorage.setItem('key', result.data.token)
            dispatch(saveUserData(result.data.user))  
        } catch (error) {
            if (error.message === "Network Error")
                alert('Maybe the server is down. Please start the API server first or restart the API server.')
            else
                alert(error.response.data.message)
        }
    }
}

export const signUp = data => {
    const {username, password, email} = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_REGISTER, {
                username, 
                password, 
                email
            })
            localStorage.setItem('key', result.data.token)
            dispatch(saveUserData(result.data.user))  
        } catch (error) {
            if (error.message === "Network Error")
                alert('Maybe the server is down. Please start the API server first or restart the API server.')
            else
                alert(error.response.data.message)
        }
    }
}

export const checkUser = () => {
    return async dispatch => {
        try {
            const result = await axios.post(GET_USER_DATA_API, null, {
                headers: { "Authorization": localStorage.getItem('key') }
            })
            dispatch(saveUserData(result.data.user))   
        } catch (error) {
            if (error.message === "Network Error")
                alert('Maybe the server is down. Please start the API server first or restart the API server.')
            else
                alert(error.response.data.message)
        }
    }
}

export const signOut = () => dispatch => {
    localStorage.clear()
    return dispatch({
        type: USER_LOGOUT
    })
}

export const saveUserData = user => {
    return {
        type: GET_USER_DATA,
        payload: user
    }
}