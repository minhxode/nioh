import React from 'react'
import Todo from "./Todo"

export default function TodoList( {todos , toggleTodo} ) {
    return (
        todos.map(todoElement => {
            return <Todo key  = {todoElement.id}  toggleTodo = {toggleTodo} todo = {todoElement} />
        })
    )
}



