

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './redux/store'
import { decrementCreator, getRequestAsync, icrementCreator, reset } from './redux/action'

function App() {
// type DispatchFunc = () => AppDispatch      //phần comment này là khai báo type cho dispatch, thích thì làm không thì thôi
  // const useAppDispatch: DispatchFunc = useDispatch
  // const dispatch = useAppDispatch()

  const dispatch = useDispatch()
  const selector = useSelector((state: RootState) => state)

  return (
    <>
      <h2>{selector.counterReducer.counter}</h2>
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch(icrementCreator())}>Increment</button>
        <button onClick={() => dispatch(decrementCreator())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <button onClick={() => dispatch(getRequestAsync())}>Async action thunk</button>
        <div>
          {JSON.stringify(selector.getDataReducer.dataApi)}
        </div>
      </div>
    </>
  )
}

export default App
