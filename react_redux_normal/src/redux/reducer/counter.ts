
interface IState {
  counter: number,
}

export interface IAction {
  type: `INCREMENT` | `DECREMENT` | `RESET` 
  payload: number 
}

const initialState: IState = {
  counter: 0,
}

export function counterReducer(state = initialState, action: IAction) {
  const stateCopy = { ...state }
  switch (action.type) {
    case `INCREMENT`:
      return {
        ...state,
        counter: stateCopy.counter + action.payload,
      }
    case `DECREMENT`:
      return {
        ...state,
        counter: stateCopy.counter - action.payload,
      }
    case `RESET`:
      return {
        ...state,
        counter: 0,
      }
    default:
      return state
  }
}

