import {createSlice} from "@reduxjs/toolkit"
import { getDataRequest } from "../action"

type IDataAPI = {id:number, text:string}[] | []
type IState= {
    counter:number,
    loading: boolean,
    data: IDataAPI
}
type IAction = {
    type: string,
    payload: number
}
const initialState:IState = {
    counter: 0,
    loading: false,
    data: []
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state:IState,action:IAction) => {
            return {...state, counter: state.counter  + action.payload}
        },
        decrement: (state:IState,action:IAction) => {
            return {...state, counter: state.counter  - action.payload}
        },
        reset: (state:IState) => {
            return {...state, counter:0}
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getDataRequest.pending, (state, action) => {
            state.loading = true
            return state
          }),
          builder.addCase(getDataRequest.fulfilled, (state, action) => {
            console.log(`getData success`)
            return {...state, loading: false,data: action.payload }
          }),
          builder.addCase(getDataRequest.rejected,(state,action) => {
            console.log(`getData Fail`)
            return {...state, loading:false, data: []}
          })
      
     }
})

export const {increment, decrement,reset } = counterSlice.actions

export default counterSlice.reducer