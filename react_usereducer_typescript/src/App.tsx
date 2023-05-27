import { useState, useReducer } from 'react'

import './App.css'
type TYPE_ACTION = `INCREMENT` | `DECREMENT` | `RESET`

interface Iaction {
  type: TYPE_ACTION
  payload: number
}

const reducerFn = (state: number, action: Iaction) => {
  switch (action.type) {
    case `INCREMENT`:
      return state + action.payload
    case `DECREMENT`:
      return state - action.payload
    case `RESET`:
      return 0
    default:
      return state
  }
}
function App() {
  const [counter, dispatch] = useReducer(reducerFn, 0)
  return (
    <>
      <h2>Counter: {counter}</h2>
      <div className="flex">
        <button
          onClick={() => {
            dispatch({
              type: 'INCREMENT',
              payload: 1,
            })
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'DECREMENT',
              payload: 1,
            })
          }}>
          {' '}
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'RESET',
              payload: 0,
            })
          }}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
