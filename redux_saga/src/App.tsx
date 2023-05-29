import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './redux-saga/store'
function App() {
  const selector = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  if (selector.loading) {
    return <h2>Loading....</h2>
  }
  return (
    <>
      <h2>Counter: {selector.counter}</h2>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            dispatch({ type: `INCREMENT`, payload: 1 })
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: `DECREMENT`, payload: 1 })
          }}>
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: `RESET`, payload: 0 })
          }}>
          Reset
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            dispatch({ type: `START_GET_DATA_API`, payload: 123 })
          }}>
          Async Call API
        </button>
        <h5>
          Data API: {JSON.stringify(selector.data)}
        </h5>
      </div>
    </>
  )
}

export default App
