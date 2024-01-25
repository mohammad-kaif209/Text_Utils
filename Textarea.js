import React, { useState } from 'react'
export default function Textarea(props) {
    const [text, setText] = useState('');
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const toUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("converted to upper case!!","success");
    }

    const toLower = () => {
        setText(text.toLowerCase());
        props.showAlert("converted to Lower case!!","success");
    }
    const toClear = () => {
        setText('');
        props.showAlert("Text is cleared!!","success");
    }
    const count = ()=>{
        if (text.length>0){
        return text.trim().split(/[ ]+/).length;
        }
        else{
        return 0;
        }
        }
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading} </h1>
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonChange} placeholder='Enter text here....' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#8a66ff1f', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={toUpper}>Upper Case</button>
                <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={toLower}>Lower Case</button>
                <button type="button" className={`btn btn-${props.mode} mx-2`} onClick={toClear}>Clear</button>
                <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                    <div className="preview">
                        <h2>preview</h2>
                        <p>{text.length > 0 ? text : "enter text in text box to preview it here"}</p>
                    </div>
                    <div className="count">
                        <h2>Counting No.of Letters in the sentence..(Incl. Spaces)</h2>
                        <p>Total No.of letters are=  {text.length}</p>
                        <p>Total No.of Words are=  {count()}</p>
                        <p>Time will  take to read the above text is {text.length * 0.025}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
