import { combineReducers, createStore, applyMiddleware } from 'redux'
import { counterReducer } from './reducer/counter'
import { getDataReducer } from './reducer/getDataApi';
import thunk from 'redux-thunk';

const appReducer =combineReducers({
    counterReducer: counterReducer, 
    getDataReducer: getDataReducer
}) 
const store = createStore(appReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState> //khai báo type cho useSelector
//type cua useDispatch
export type AppDispatch = typeof store.dispatch
export default store