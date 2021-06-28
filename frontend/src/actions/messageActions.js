import {MESSAGE_LIST_FAIL,MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_REQUEST,
    MESSAGE_DETAILS_SUCCESS,MESSAGE_DETAILS_FAIL,MESSAGE_DETAILS_REQUEST
} from '../constants/messageConstants'
import axios from 'axios'

export const listMessages = () => async (dispatch)=> {
    try {
        dispatch({type:MESSAGE_LIST_REQUEST})
        const {data} = await axios.get('/api/messages')

        dispatch({
            type:MESSAGE_LIST_SUCCESS,
            payload:data
        }) 
    }catch (error){
        dispatch({
            type:MESSAGE_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}


export const listMessageDetails = (id) => async (dispatch)=> {
    try {
        dispatch({type:MESSAGE_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/messages/${id}`)

        dispatch({
            type:MESSAGE_DETAILS_SUCCESS,
            payload:data
        }) 
    }catch (error){
        dispatch({
            type:MESSAGE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}