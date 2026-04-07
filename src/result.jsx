
function Result(props){

    const {text,randomnum,attempt}=props

    let message = "";

    if(text === ""){
        message = "Enter a number"
    }

    if(text>randomnum){
        message = "Input Number Is High"
    }
    else if(text < randomnum){
        message = "Input Number Is LOW"
    }
    else if ( text === randomnum){
        message = "Ahhh That's Correct"
        
    }
   return(
    <>
    <h2>{message}</h2>
    <h2>attempt : {attempt}</h2>
    </>
   )
}
export default Result;