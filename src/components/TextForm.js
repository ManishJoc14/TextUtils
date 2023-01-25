import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared","success");
    }
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces has been removed","success");
    }
    const removeLastSpace = () => {
        if (text.charAt(text.length-1)===" "&&text.charAt(text.length-2)===" ") {
            let newText = text.slice(0,text.length-1);
             setText(newText);
             return newText;
         }
         if (text.charAt(text.length-1)===" ") {
            let newText = text.slice(0,text.length-1);
             return newText;
         }
        return text;
    }
    const textLength = ()=>{
        if (text.charAt(text.length-1)===" ") {
            var textLength = text.length-1;
            return textLength;
        }else{
            return text.length;
        }
    }
    const beautifyText = ()=>{
        let T = text.split(/[ ]+/).join(" ");
        setText(T)
        if (T.charAt(T.length-1)===" ") {
            var newText = T.slice(0,T.length-1);
             setText(newText);
         }
    }
    const [text, setText] = useState("");

    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="container" >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onFocus={handleOnChange} onBlur={beautifyText} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert TO Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLoClick} >Convert TO Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleCopyClick} >Copy to clipboard</button>
                <button className="btn btn-primary m-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button className="btn btn-primary m-2" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3" >
                <h2>Your text summary</h2>
                <p>{textLength(text)===0?0:removeLastSpace().split(" ").length} words and {textLength(text)} characters</p>
                <p>{0.008 / 60 * 7 * parseInt(textLength(text))} minuets read</p>
                <h2>Preview</h2>
                <p>{textLength(text) > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </div>
    );
}
