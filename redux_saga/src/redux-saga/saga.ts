import { takeEvery, call, put, all } from 'redux-saga/effects'
import axios from 'axios'

export type Response = {
  id: number
  text: string
}[]

type AxiosCall<T> = {
    data: T
}

function* fetchData(param:any) {
    console.log(`parram`, param)
    //có thể bắt đầu define loading in here
    yield put({ type: `GET_DATA_API_LOADING` })

  try {
    //gọi api
    const response: AxiosCall<Response> = yield call(
      //call nhận vào 2 đôi số, 1 là tên hàm gọi và 2 là đối số của hàm đó
      axios.get,
      `https://retoolapi.dev/oWlrVT/data`
    )
    //put 1 action
    console.log(`ressponse`, response)
    yield put({ type: `GET_DATA_API_SUCCESS`, payload: response.data })
  } catch (error) {
    yield put({ type: `GET_DATA_API_ERROR`, payload: error })
  }
}

export function* watchCallAPIWhenActionDispatch() {
  yield takeEvery(`START_GET_DATA_API`, fetchData)
}

export default function* rootSaga() {
    yield all([
        watchCallAPIWhenActionDispatch(),
    ])
  }