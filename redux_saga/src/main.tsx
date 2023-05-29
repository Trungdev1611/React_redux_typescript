import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store, { sagaMiddleware } from './redux-saga/store.ts'
import { Provider } from 'react-redux'
import rootSaga from './redux-saga/saga.ts'

//trước khi khởi tạo dự án với redux saga phải mount nó trước
sagaMiddleware.run(rootSaga)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)