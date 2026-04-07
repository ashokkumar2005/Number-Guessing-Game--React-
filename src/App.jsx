import { useEffect, useState } from "react";
import Result from "./result"

function App() {
   

    const [text,setText] =useState("");
    const [randomnum,setRandomnum] = useState(0)
    const [attempt,setAttempt] = useState(0)
    useEffect(()=>{
       genraterandomnum();

    },[])

function genraterandomnum(){
        const randomnum = Math.floor( Math.random()*10+1);
        setRandomnum(randomnum)
}
    function handlechange(e){
     setText(e.target.value);
    }

function handlesubmit(){

    if(text === "") return;

    const userguess = Number(text);

    
}

    
    
    
     
    
    return(
      <>
      <form onSubmit={handlesubmit}>
      <label> Guess the number between 1-10 : answer : {randomnum} </label><br/>
      <input 
      type="number"
      placeholder="Enter a Number" 
      onChange={handlechange}/>
      
      <button type="submit"> Check Guess</button>
      </form>
      <Result randomnum={randomnum} text={guess} attempt={attempt}></Result>
      </>
    )


   
}

export default App;