import React, {useEffect, useState} from 'react';
import { v4 } from 'uuid';

import TodoList from './TodoList'
import Header from './header'

const TODO_APP_STORAGE = 'TODO_APP'

function App() {
    const [todoList, setTodoList] =  useState([])
    const [textInput, setTextInput] =  useState("")

    useEffect(() => {
        if(localStorage.getItem(TODO_APP_STORAGE)) {
            setTodoList(JSON.parse(localStorage.getItem(TODO_APP_STORAGE)))
        }
    }, [])

    useEffect (() => {
        localStorage.setItem(TODO_APP_STORAGE, JSON.stringify(todoList))
    },[todoList])


    const onTextInputChange = e => {
        setTextInput(e.target.value);
    }
    const onClickBtn = () => {
        //Them textInput vao todoList
        setTodoList([{id: v4(), title: textInput, complete: false}, ...todoList])
        setTextInput("");
    }

    const onCheckbox = (id) => {
        setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo))
    }

    const deleteTodo = (id) => {
        setTodoList(prevState => prevState.filter(todo => todo.id !== id))
    }

    return(
        <div className="app-container">
            <Header 
            inputValue={onTextInputChange} 
            btnClick={onClickBtn}
            checkTextInput={!textInput}
            />
            <TodoList 
            todoList = {todoList}
            onCheckbox = {onCheckbox}
            deleteTodo = {deleteTodo}
            />
        </div>
    )
}

export default App;