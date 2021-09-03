import React from 'react';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import Checkbox from '@atlaskit/checkbox'

export default function TodoListItem (props) {

    return(
        <div className="list-item">
            <Checkbox
                isChecked = {props.todo.complete}
                label= {<div className="list-item--title"> 
                            <div className={props.todo.complete ? "list-item--complete" : ""}> 
                                {props.todo.title}
                            </div>
                        </div>}
                onChange={() => props.onCheckbox(props.todo.id)}
            />
            <span 
            className="icon-remove"
            onClick={() => props.deleteTodo(props.todo.id)}
            >
                <EditorCloseIcon/>
            </span>
        </div>
    )

}