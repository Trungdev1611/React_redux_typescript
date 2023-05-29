import createSagaMiddleware  from 'redux-saga';
import { applyMiddleware, createStore } from "redux";
import reducerMain from "./reducer";

export const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducerMain, applyMiddleware(sagaMiddleware) )
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store