import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios'

//routes
import {BrowserRouter} from 'react-router-dom';

//axios.defaults.baseURL='http://localhost:5000/';
/*
let userData = JSON.parse(localStorage.getItem("userData"))
let token

if(userData){
token = userData.token
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';axios.interceptors.request.use(request => {
  return request;
},
error => {console.log(error);
return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  return response
},
error => {
  console.log(error);
  return Promise.reject(error)
}
);*/

ReactDOM.render(
 <BrowserRouter>
    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);
