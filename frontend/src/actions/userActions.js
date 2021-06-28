 import axios from 'axios'
 import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
    USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_LIST_FAIL,USER_LIST_SUCCESS,USER_LIST_REQUEST,USER_DETAILS_FAIL,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS
} from '../constants/userConstants'

 export const login = (email, password) => async (dispatch) => {
     try {
         dispatch({
             type: USER_LOGIN_REQUEST
         })

         const config = {
             headers:{
                 "Content-Type":'application/json'
             }
         }

         const {data} = await axios.post('/api/users/login',{email, password},config)

         dispatch({
             type:USER_LOGIN_SUCCESS,
             payload:data
         })
         localStorage.setItem('userInfo',JSON.stringify(data))
        } catch (error){
            dispatch({
                type:USER_LOGIN_FAIL,
                payload:
                error.response && error.response.data.message ? error.response.data.message:error.message,
            })
     }
}

export const logout = () =>(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}


export const register = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                "Content-Type":'application/json'
            }
        }

        const {data} = await axios.post('/api/users',{email, password},config)

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })


        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))
       } catch (error){
           dispatch({
               type:USER_REGISTER_FAIL,
               payload:
               error.response && error.response.data.message ? error.response.data.message:error.message,
           })
    }
}


export const listUsers = () => async (dispatch)=> {
    try {
        dispatch({type:USER_LIST_REQUEST})
        const {data} = await axios.get('/api/users')

        dispatch({
            type:USER_LIST_SUCCESS,
            payload:data
        }) 
    }catch (error){
        dispatch({
            type:USER_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}


export const listUserDetails = (id) => async (dispatch)=> {
    try {
        dispatch({type:USER_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/users/${id}`)

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        }) 
    }catch (error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}
