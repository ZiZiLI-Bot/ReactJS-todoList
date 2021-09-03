import React from 'react';
import Textfield from "@atlaskit/textfield"
import Button from "@atlaskit/button"

export default function header (props) {

    return(
        <>
            <h3 className="header-title">Danh sách việc cần làm</h3>
            <Textfield 
            name="addTodo" 
            placeholder="Thêm việc cần làm..." 
            className="header-input"
            onChange={props.inputValue}
            elemAfterInput = {<Button isDisabled = {props.checkTextInput} onClick={props.btnClick}>Add</Button>}>

            </Textfield>
        </>
    )

}