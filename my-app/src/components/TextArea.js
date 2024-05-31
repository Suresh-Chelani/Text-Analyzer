import React, { useState } from 'react';

export default function TextArea({heading, mod , change, bt,show}) {

    const [text, setText] = useState("Enter the text...");
    const [isFirstClick, setIsFirstClick] = useState(true); 

    function handleChange(event){
        setText(event.target.value);
    }
    const changetoUpper = () => {
        let Text = text.toUpperCase();
        setText(Text);
        show("UpperCase Toggle now", "success")
    }
    const changetoLower = () => {
        setText(text.toLowerCase());
        show("LowerCase Toggle now", "success")
    }
    const handleClick = () => {
        if (isFirstClick) {
            setText("");
            setIsFirstClick(false);
        }
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        show("Speak Mode toggle now", "success")
    }

    const DeleteLastChar = () => {
        setText(text.slice(0,-1));
        show("Last char is deleted now", "success")
    }

    const DeleteLastWord = () => {
        let st = text.split(" ");
        st.pop();
        let newText = st.join(" ");
        setText(newText);
        show("Last word is deleted now", "success")
    };

  return (
    <>
    <div className='container' style={{color: mod.color === 'white' ? 'black' : 'white', borderRadius:'5px'}}>
        <div className="mb-3">
        <h1>{heading} </h1>
        <textarea className="form-control" onClick={handleClick} onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="4"></textarea>
        <button type="button" onClick={changetoUpper}  className="btn btn-secondary mt-4 mb-4">Upper-Case</button>
        <button type = "button" onClick={changetoLower} className='btn btn-primary mt-4 mx-2 mb-4'>Lower-Case</button>
        <button type="button" onClick={DeleteLastChar} className="btn btn-warning mt-4 mx-2 mb-4">Del last Char</button>
        <button type="button" onClick={DeleteLastWord} className="btn btn-success mt-4 mx-2 mb-4">Del last Word</button>
        <button type="submit" onClick={speak} className="btn btn-info mt-4 mx-2 mb-4">Click to Speak</button>
        <button type="button" onClick={change}  className="btn btn-dark mt-4 mx-2 mb-4">{bt}</button>
        </div>
    </div>
    <div className='container' style={{color: bt === 'Dark Mode' ? 'white' : 'black'}}>
    <h2>Word and Characters </h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } words  {text.length} Characters</p>

    <h2>Time to Read that text:</h2>

    <p>{((1/125) * (text.split(" ").filter((element) => {return element.length !== 0})).length).toFixed(2)} min per words (Slow reading)</p>
    <p>{((1/300) * (text.split(" ").filter((element) => {return element.length !== 0})).length).toFixed(2)} min per words (Average reading)</p>
    </div>
    </>
  )
}
