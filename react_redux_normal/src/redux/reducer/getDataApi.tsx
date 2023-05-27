type IData = {
  id: number
  Column1: string
}[] | []

interface IState {
  dataApi: IData 
}

interface IGetDataAction {
  type: `GET_DATA_SUCCESS` | `GET_DATA_FAIL`
  payload: IData
}

const initialState: IState = {
  dataApi: [],
}

export function getDataReducer(state = initialState, action: IGetDataAction):IState {
  switch (action.type) {
    case `GET_DATA_SUCCESS`:
      return {
        ...state,
        dataApi: action.payload ,
      }
    case `GET_DATA_FAIL`:
      return { ...state, dataApi: action.payload }

    default:
      return state
  }
}
