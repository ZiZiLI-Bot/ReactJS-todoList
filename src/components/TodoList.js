import React from 'react';

import TodoListItem from './TodoListItem'

export default function TodoList (props) {

    return(
        props.todoList.map(todo => <TodoListItem 
                                    key={todo.id} 
                                    todo={todo} 
                                    onCheckbox = {props.onCheckbox}
                                    deleteTodo = {props.deleteTodo}
                                    />)
    )

}