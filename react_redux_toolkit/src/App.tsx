import { useState } from 'react'
import { increment,decrement, reset} from './redux_toolkit/reducer/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './redux_toolkit/store'
import { getDataRequest } from './redux_toolkit/action'
function App() {
  const dispatch = useDispatch<AppDispatch>()
  const selector = useSelector((state:RootState) => state)
  if(selector.counterReducer.loading) {
    return <h2>Loading....</h2>
  }
  return (
    <>
    <h2>{selector.counterReducer.counter}</h2>
    <div style={{display: "flex"}}>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>

    <div style={{marginTop: "20px"}}>
        <button onClick={() => dispatch(getDataRequest())}>Call API Async thunk</button>
        <div>
          {JSON.stringify(selector.counterReducer.data)}
        </div>
    </div>
    </>
  )
}

export default App
