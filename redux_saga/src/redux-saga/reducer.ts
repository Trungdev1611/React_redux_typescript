type payloadAPI = [] | Response
type IState = {
  counter: number
  data: payloadAPI
  loading: boolean
}
type IAction = {
  type: `INCREMENT` | `DECREMENT` | `RESET` | `START_GET_DATA_API` | `GET_DATA_API_SUCCESS` | `GET_DATA_API_ERROR`
  payload: number | payloadAPI
}

const initialState: IState = {
  counter: 0,
  data: [],
  loading: false,
}

const reducerMain = (state = initialState, action: IAction) => {
  console.log(`action`, action)
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + (action.payload as number) }
    case 'DECREMENT':
      return { ...state, counter: state.counter - (action.payload as number) }
    case 'RESET':
      return { ...state, counter: 0 }
    case `START_GET_DATA_API`: {
      return { ...state, loading: true }
    }
    case 'GET_DATA_API_SUCCESS':
      return { ...state, loading: false , data: action.payload}
    case 'GET_DATA_API_ERROR':
      return { ...state, loading: false , data: action.payload}
    default:
      return state
  }
}

export default reducerMain
