import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
            let newText = text.toUpperCase();
            setText(newText);
            // props.showAlert("Text changed to UpperCase", "success")
        
    }

    const handleLowClick = ()=>{
            setText(text.toLowerCase());
            // props.showAlert("Text changed to LowerCase", "success")
            
          }
          
          const handleClearClick = ()=>{
            setText('');
            props.showAlert("Text deleted", "success")

    }

    const handleCopyToClipboard = ()=>{
            copy(text)
            props.showAlert("Text Copied Successfully!! ", "success")
    }

    const handleRemoveExtraSpace = ()=>{
        setText(text.split(' ').filter(word => word).join(' '))
        // props.showAlert("Removed extra space ", "success")
    }

    const handleRemoveExtraLines =()=>{
        console.log(text)
        setText(text.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, ""))
        // props.showAlert("Removed extra lines", "success")
    }

    const handleCapitalizeSentences = ()=>{
      const sentenceRegex = /(\.\s+)/g;

      // Split the input string into an array of sentences using the regex
      const sentences = text.split(sentenceRegex);
    
      // Iterate through each sentence and capitalize the first letter
      const formattedSentences = sentences.map((sentence, index) => {
        // Capitalize the first letter if it's not empty
        if (index % 2 === 0) {
          sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }
        return sentence;
      });
    
      // Join the formatted sentences back together
      const resultString = formattedSentences.join('');
  
      
      setText(resultString);
      // props.showAlert("Capitalized sentences ", "success")

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
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleRemoveExtraSpace}>RemoveExtraSpace</button>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleRemoveExtraLines}>RemoveExtraLines</button>
        <button disabled = {text.length === 0} className=" btn btn-primary my-3 mx-1" onClick={handleCapitalizeSentences}>CapitalizeSentences</button>
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
