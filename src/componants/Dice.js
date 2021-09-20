

function Dice({setCombo,state,setKeep,IsCurrentPlay}){

    function handleClick(){
        if(IsCurrentPlay){ 
            if (state.keep===false && (state.value===1|| state.value===5)){
                setKeep({...state,keep:true})
                if(state.value===5){setCombo((prevState)=>({...prevState,cinquante: prevState.cinquante +1}))}
                if(state.value===1){setCombo((prevState)=>({...prevState,cent: prevState.cent +1}))}

            }else if(state.confirmed===false){
                setKeep({...state,keep:false})
                if(state.value===5){setCombo((prevState)=>({...prevState,cinquante: prevState.cinquante -1}))}
                if(state.value===1){setCombo((prevState)=>({...prevState,cent: prevState.cent -1}))}
            }
        }
    }
    return state.keep?(
        <div  onClick={handleClick} className="dice keep">{state.value}</div>
    ):(
        <div onClick={handleClick} className="dice ">{state.value}</div>
 
    )
}

export default Dice