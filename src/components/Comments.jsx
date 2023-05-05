import React, { useState } from "react";

function Comments(props) {

    const [textAreaValue, setTextAreaValue] = useState(props.TextAreaOnChange);

    function handleDoneFromCommentComp() {
        props.ButtonDone(textAreaValue);
    }

    function handleTextAreaOnchange(event) {
        const textChange = event.target.value;
        setTextAreaValue((preValue) => {
            return { ...preValue, textChange }
        })
    }

    return (
        <div className="fixed_text" style={props.StyleUpdate}>
            <textarea className="fixed_textarea_div" disabled={props.Disable} value={textAreaValue} onChange={handleTextAreaOnchange}></textarea> <br />
            <button style={{ marginLeft: '520px' }} onClick={props.Button} disabled={props.ButtonDisable}>Edit</button><button onClick={handleDoneFromCommentComp}>Done</button>
        </div>
    )
}

export { Comments }