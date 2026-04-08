import { useEffect, useState } from "react";
import Result from "./result"
import "./index.css"

function App() {
   

    const [text,setText] =useState("");
    const [randomnum,setRandomnum] = useState(0)
    const [attempt,setAttempt] = useState(0)
    const [guess,setGuess] = useState(null);
    useEffect(()=>{
       genraterandomnum();

    },[])

function genraterandomnum(){
        const num = Math.floor( Math.random()*10+1);
        setRandomnum(num)
}
    function handlechange(e){
     setText(e.target.value);
    }

function handlesubmit(e){
    e.preventDefault();

    if(text === "") return;

    const userguess = Number(text);
    setGuess(userguess);
    setAttempt(prev=>prev+1);
   

    if(userguess === randomnum){
     setTimeout(()=>{setAttempt(0);
        genraterandomnum();
        setText("")
        setGuess(null)}, 1000)
        
    }else{
        setText("");
    }


    
}
  
     return(
      <>
      <form onSubmit={handlesubmit}>
      <label> Guess the number between 1-10 </label><br/>
<input
  type="number"
  value={text}
  onChange={handlechange}
  placeholder="Enter a Number"
/>      
      <button type="submit" disabled= {!text} > Check Guess</button>
      </form>
      <Result randomnum={randomnum} text={guess} attempt={attempt}></Result>
      </>
    )


   
}

export default App;