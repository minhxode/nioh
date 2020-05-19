import React, {useState, useRef, useEffect, Component} from 'react';
import './../App.css'
import TodoList from "./../TodoList"
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const Contact = () => {
    return (<h1>128.0.0.1</h1>)
}

const User = (params) => {
    return (<h1>Username: {params.username}</h1>)
    }

const Products = (params) => {
    return (<h1>Product: {params.name}</h1>)
}

function NavLinks() {

    const isLoggedState = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
            <>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/products" exact /*activeStyle={{color: 'green'}}*/>Products</NavLink></li>
                <li><NavLink to="/about" exact /*activeStyle={{color: 'green'}}*/>About</NavLink></li>
                <li><NavLink to="/contact" exact /*activeStyle={{color: 'green'}}*/>Contact</NavLink></li>
            </>
    )}


    function NavRoutes() {

        const isLoggedState = useSelector(state => state.isLogged);
        const dispatch = useDispatch();
    
        return (
                <>
                    <Route path="/" exact strict render={()=> {return (<h1>Welcome home!</h1>); }}/>
                    <Route path="/products" exact strict component = {Products} />
                    <Route path="/products/:productname" exact strict render= {props => 
                    (isLoggedState ? ( <Products name={props.match.params.productname}/>)
                                    : (<Redirect to="/" />))} />
                    <Route path="/about" exact strict render={()=> {return (<h1>Is there anything else?</h1>); }}/>
                    <Route path="/contact" exact strict component = {Contact} />
                </>
    )}

export {NavLinks, NavRoutes};
// module.exports = {
//     NavLinks: NavLinks,
//     NavRoutes: NavRoutes
// }