import {MESSAGE_LIST_FAIL,MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_REQUEST,
    MESSAGE_DETAILS_FAIL,
    MESSAGE_DETAILS_REQUEST,
    MESSAGE_DETAILS_SUCCESS

} from '../constants/messageConstants'

export const messageListReducer = (state = {messages:[]}, action) => {
    switch (action.type){
        case MESSAGE_LIST_REQUEST:
            return {loading:true, message:[]}
        case MESSAGE_LIST_SUCCESS:
            return { loading:false, messages:action.payload}
        case MESSAGE_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const messageDetailsReducer = (state = {message:{}}, action) => {
    switch (action.type){
        case MESSAGE_DETAILS_REQUEST:
            return {loading:true, ...state}
        case MESSAGE_DETAILS_SUCCESS:
            return { loading:false, message:action.payload}
        case MESSAGE_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}