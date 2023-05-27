import axios from "axios"
import { IAction } from "./reducer/counter"
import { Dispatch } from "redux"

export function icrementCreator():IAction {
    return {
        type: `INCREMENT`,
        payload: 1
    }
}

export function decrementCreator():IAction  {
    return {
        type: `INCREMENT`,
        payload: -1
    }
}

export function reset():IAction  {
    return {
        type: `RESET`,
        payload: 0
    }
}


//async action dispatch
export function getRequestAsync():any {
    return async (dispatch:Dispatch) => {
    alert(1)
    try {
    const  res = await axios.get(`https://retoolapi.dev/1J4pWC/dat`)
        if(res.data) {
            dispatch({
                type: "GET_DATA_SUCCESS",
                payload: res.data
            })
        }
    } catch (error) {
        dispatch({
            type: "GET_DATA_FAIL",
            payload: ["fail"]
        })
    }
  
}}