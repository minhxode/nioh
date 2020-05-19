import React from 'react'
import Todo from "./Todo"
import {useSelector, useDispatch} from 'react-redux';
import{increment, decrement} from './components/Redux/Actions'

export default function TodoList( {todos , toggleTodo} ) {
    const listCounter = useSelector(state => state.listCounter);
    const dispatch = useDispatch();
    return (
        todos.map(todoElement => {
            return <Todo key  = {todoElement.id}  toggleTodo = {toggleTodo} todo = {todoElement} />
        })
    )
}



