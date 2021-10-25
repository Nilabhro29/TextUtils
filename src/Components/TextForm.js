import React,{ useState }  from 'react'

export default function TextForm(props) {
    
    let handleUpClick = ()=>{
        console.log('button was clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    let handleLowClick = ()=>{
        console.log('button was clicked'+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    let handle = ()=>{
        console.log('button was clicked'+ text);
        let newText="";
        for(let i=0;i<text.length;i++){
            if(text[i]=='a' || text[i]=='e'|| text[i]=='i'|| text[i]=='o'|| text[i]=='u')
            newText+=text[i];  
        }
        setText(newText);
    }
    let handleOnChange = (e)=>{
        console.log('ONCHANGE');
        setText(e.target.value);
        }
    const [text, setText]= useState('Enter something here');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handle}>Remove All Consonants</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
        </div>
        <div className="container my-2">
            <h1>
                Your Text Summary 
            </h1>
            <p>
                Your text has {text.split(" ").length} words  and  {text.length} characters.
            </p>
            <h3>preview</h3>
            <p>{text}</p>
                    </div>
        </>
    )
}
