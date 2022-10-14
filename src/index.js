import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function tenNames(user) {
  let returnval = '';
  for (let i = 0; i < 10; i++) {
     returnval += user.firstName + ' ' + user.lastName + '';
  }
  return returnval
}

const user = {
  firstName: 'meee',
  lastName: 'mooo'
};

const functionalElement = (
  <h1>Hello {tenNames(user)}!</h1>
)

function Element(props) {
  return (
    <h1>Hello {props.name}!</h1>
  )
}

const element = <Element name="Bob"/>

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {element}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
