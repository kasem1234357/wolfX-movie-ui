import React from 'react';
import App from './App';
import {BrowserRouter as Router} from 
'react-router-dom'
import 
{ 
createRoot 
} 
from 
'react-dom/client'
;
import { Provider } from 'react-redux'
import {store} from './redux/store'
import {  getUser } from './redux/slices/userSlice';

const userData= localStorage.getItem('userToken') ?localStorage.getItem('userToken') : null
userData && store.dispatch(getUser())
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router>
  <Provider store={store}>    
    <App />
</Provider>
</Router>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

