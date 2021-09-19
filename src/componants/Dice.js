

function Dice({state,setKeep,IsCurrentPlay}){

    function handleClick(){
        if(IsCurrentPlay){ 
            if (state.keep===false && (state.value===1|| state.value===5)){
                setKeep({...state,keep:true})

            }else if(state.confirmed===false){
                setKeep({...state,keep:false})
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