import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import allFckingReducers from './components/Redux/Reducers'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import {Links, Routes} from './components/Navbar';


//STORE: Data storage for all components (globalized state)
let store = createStore(allFckingReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Display it in the console
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            < App />
        </Router>
    </Provider>, 
document.getElementById('react-app'));

// ReactDOM.render(
//     <Provider store={store}>
//         < NavLinks />
//     </Provider>, 
// document.getElementById('navbar'));

// ReactDOM.render(
//     <Provider store={store}>
//         < NavRoutes />
//     </Provider>, 
// document.getElementById('GnRoutes'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA