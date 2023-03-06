import React from "react";

function Input(props) {
    return (
    <div>
      <form>
        <input onChange={(event) => {
            props.onTitleMod(event)
        }} name="title" placeholder="Title" value={props.titleValue}/>
        <textarea onChange={(event) => {
            props.onContentMod(event)
        }} name="content" placeholder="Take a note..." rows="3" value={props.contentValue}/>
        <button onClick={props.onSubmit} type="button">Add</button>
      </form>
    </div>
    )
}

export default Input;