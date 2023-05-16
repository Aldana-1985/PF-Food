import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './Redux/store';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';


  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <Auth0Provider domain='dev-cmxwngxa6q5zgne1.us.auth0.com' clientId='Ni3JEGBsjENSwW8EV5JI9S69A3J7tcJY' redirectUri={window.location.origin}>
        <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>,
      
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
