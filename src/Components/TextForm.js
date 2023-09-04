import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text changed to UpperCase", "success")
        
    }

    const handleLowClick = ()=>{
            setText(text.toLowerCase());
            props.showAlert("Text changed to LowerCase", "success")
        
    }

    const handleClearClick = ()=>{
        // if(text.length > 0){
            let rs = window.confirm("Do you want to clear")
            if(rs) setText('')
        // }
        // else{
        //     props.showAlert("Please enter some text", "warning")
        // }
    }

    const handleCopyToClipboard = ()=>{
        // if(text.length > 0){
            copy(text)
            props.showAlert("Text Copied Successfully!! ", "success")
        // }
        // else{
            // props.showAlert("Please enter some text", "warning")
        // }
        // props.showAlert("Copied to clipboard")
    }

    const [text, setText] = useState(""); 

  return (
    <div>
      <div className="form container my-2" style={{color : props.mode === 'light' ? 'black':'white'}}>
        <h1>Write your text below to analyze</h1>
        <textarea
          className="form-control textArea mt-4"
          placeholder="Enter your text here..."
          id="floatingTextarea2"
          onChange={handleOnChange}
          value={text}
          style={{color : props.mode === 'light' ? 'black':'white', backgroundColor: props.mode==='light'?'white':'#3d4155'}}
        ></textarea>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleUpClick}>ToUpperCase</button>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleLowClick}>ToLowerCase</button>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleClearClick}>ClearText</button>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleCopyToClipboard}>CopyToClipboard</button>
      </div>
      <div className="container summary my-4" style={{color : props.mode === 'light' ? 'black':'white', backgroundColor: props.mode==='light'?'white':'#3d4155'}}>
        <h2>Your Summary</h2>
        Total words :- {text.split(/\s+/).filter(word => word !== '').length} <br />
        Total characters :- {text.length} <br />
        Total time required to read :- {text.split(" ").filter(word => word !== '').length / 125} minutes
      </div>
    </div>
  );
}
