import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4';
import {NavRoutes} from './components/Navbar';

const LOCAL_STORAGE_KEY = 'todoApp.todos.whateveryouwanttocallit.friendo'


function App() {

    const[scrollDepth, setScrollDepth] = useState(0)

    function determineUserScrollDepth() {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop
        setScrollDepth(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', determineUserScrollDepth)
    })

    const [todos, setTodos] = useState([
        {id: 1, name: 'Todo 1', complete: false}, 
        {id: 2, name: 'Todo 2', complete: true}])
    const todoNameRef = useRef()

    //Using Hook useEffect to load temporary data from the local storage every time the page is rerendered
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    },[])
    //Using Hook useEffect to save data to the local storage every time the page is rerendered
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        todoNameRef.current.focus();
    }, [todos])

    function toggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e)
    {
        const name = todoNameRef.current.value
        if (name === '') {
            todoNameRef.current.focus();
            return
        }
        console.log(name)
        todoNameRef.current.value = null
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
    }

    function handleClearTodos()
    {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <>
            {/* <ul id="navbar" className="nav-links">
                < NavLinks />
            </ul> */}
            <div className = "app"> 
                <div id="GnRoutes">
                    < NavRoutes />
                </div>
                <div className = "todo-list">
                    <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
                    <form>
                            <input
                                ref = {todoNameRef} 
                                type="text" 
                                className="todo-input"
                                placeholder="Add to do ..."
                                onSubmit={handleAddTodo}
                            />
                            <div className = "todo-list">
                                <div>
                                <button onClick = {handleAddTodo}>
                                    <a className="button1" target="_blank" rel="nofollow noopener">Add Todo</a>
                                </button>
                                <button onClick = {handleClearTodos}>
                                    <a className="button1" target="_blank" rel="nofollow noopener">Clear Complete
                                    </a>
                                </button>
                                <button>
                                    <a className="button1" target="_blank" rel="nofollow noopener">Create new list
                                    </a>
                                </button>
                                </div>
                            </div>
                    </form>
                    <div className = "todo-list">
                        {todos.filter(todo => !todo.complete).length} todo(s) left to do.
                        You have scrolled {scrollDepth} pixel(s) too far  
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default App;