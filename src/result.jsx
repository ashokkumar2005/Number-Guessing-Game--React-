import "./index.css"
function Result(props){

    const {text,randomnum,attempt}=props

    let message = "";

    if(text === null){
        message = "Enter a number"
    }

    else if(text>randomnum){
        message = "Input Number Is High"
    }
    else if(text < randomnum){
        message = "Input Number Is LOW"
    }
    else if( text === randomnum) {
        message = "Ahhh That's Correct"
        }
   return(
    <div className="container">
    <h2>{message}</h2>
    <h2>attempt : {attempt}</h2>
    </div>
   )
}
export default Result;