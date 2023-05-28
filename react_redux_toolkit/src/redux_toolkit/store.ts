import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducer/counterSlice'
const appReducer = {
    counterReducer: counterReducer
}

const store = configureStore({
    reducer: appReducer
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store