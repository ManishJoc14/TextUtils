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
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(" ").join(" ");
        setText(newText);
        props.showAlert("Extra spaces has been removed","success");
    }
    const CountWords = ()=>{
        return text.split(/\s+/).filter((element)=>{return element.length!==0}).length; 
    }
    const [text, setText] = useState("");
    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="container" >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onFocus={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick} >Convert TO Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLoClick} >Convert TO Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopyClick} >Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className="container my-3" >
                <h2>Your text summary</h2>
                <p>{CountWords()} words and {text.length} characters</p>
                <p>{0.008 * CountWords()} minuets read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </div>
    );
}
