import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("")

    const handleupp = () => {
        console.log("HandleUpp");
        let newtxt = Text.toUpperCase();
        setText(newtxt);
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handlee = (event) => {
        console.log("Handle");
        setText(event.target.value)
    }

    const handleReverse = () => {
        /* Convert string to array*/
        let strArr = Text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };
    
      const changegreen = ()=>{
        document.body.style.backgroundColor = '#35C649'
      }
      const changeyellow = ()=>{
        document.body.style.backgroundColor = '#CAB911'
      }
      const changered = ()=>{
        document.body.style.backgroundColor = '#C15031'
      }
    
    const replacee = () => {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(Text.replaceAll(existing_text, replaced_text))
      }

    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handlee} rows="3"></textarea>
                <button disabled={Text.length===0} className="btn btn-primary " onClick={handleupp}>Convert to UpperCase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={replacee}>Replace All</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={changegreen}>GREEN</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={changeyellow}>YELLOW</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-2" onClick={changered}>RED</button>


            </div>

            <div className="container">
                <h1>Your text Summary </h1>
                <p>{Text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {Text.length} Characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0 ? Text : "Enter something to preview"}</p>
            </div>
        </>

    )
}
