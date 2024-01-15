import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 
'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import { getStatus, getUser } from './redux/slices/userSlice';
import { addMovie, restore } from './redux/slices/movieSlice';

const userData= localStorage.getItem('userToken') ?localStorage.getItem('userToken') : null
userData && store.dispatch(getUser())
ReactDOM.render(
  <Router>
    <Provider store={store}>    
      <App />
  </Provider>
  </Router>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

