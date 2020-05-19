import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import{increment, decrement} from './components/Redux/Actions'

export default function Todo( {todo, toggleTodo} ) {

    const counterState = useSelector(state => state.counter);
    const isLoggedState = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    function handleTodoClick()
    {
        toggleTodo(todo.id)
    }
    return (
        <>
        <div id="parent">
            <div style={{textDecoration: todo.complete ? 'line-through' :''}} className = "todo" id = "wide">
                {/* <input type = "checkbox" defaultChecked = {todo.complete} onChange = {handleTodoClick}/> */}
                {todo.name}
            </div>
            <div id = "narrow">
                <button className="todo-clear-button" onClick = {() => handleTodoClick()}>
                        <i className="fas fa-check"></i>
                </button>
                <button className="todo-plus-button"  onClick = {() => dispatch(increment(1))}>
                        <i className="fas fa-plus"></i>
                </button>
                <button className="todo-minus-button" onClick = {() => dispatch(decrement(1))}>
                        <i className="fas fa-minus"></i>
                </button>
                <button className="todo-trash-button">
                        <i className="fas fa-trash"></i>
                </button>
                {/* <button className="default-button" onClick = {() => handleTodoClick()}>Complete</button>
                <button className="default-button" onClick = {() => dispatch(increment(2))}>+</button>
                <button className="default-button" onClick = {() => dispatch(increment(2))}>-</button> */}
            </div>
        </div>
        <div>{isLoggedState ? <h5>Stalkers will see this! </h5> : counterState  }</div>
        </>
    )
}
