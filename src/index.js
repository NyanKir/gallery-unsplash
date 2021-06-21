import React from 'react'
import ReactDOM from 'react-dom'
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware }  from "redux";
import App from './App'
import './index.scss'
import thunk from 'redux-thunk';
const store=createStore(rootReducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


