function DiceValue(state){
 
    if (state.value===1){
       return <div className="dicecontainer"><div className="dice-middle"></div></div>
    }
    if (state.value===2){
        return  <div className="dicecontainer"><div className="dice-top-right"></div><div className="dice-bottom-left"></div></div>
    }
    if (state.value===3){
        return  <div className="dicecontainer"><div className="dice-top-right"></div><div className="dice-bottom-left"></div><div className="dice-middle"></div></div>
    }
    if (state.value===4){
        return  <div className="dicecontainer"><div className="dice-top-left"></div><div className="dice-top-right"></div><div className="dice-bottom-left"></div><div className="dice-bottom-right"></div></div>
    }
    if (state.value===5){
        return  <div className="dicecontainer"><div className="dice-top-left"></div><div className="dice-top-right"></div><div className="dice-bottom-left"></div><div className="dice-bottom-right"></div><div className="dice-middle"></div></div>
    }
    if (state.value===6){
        return  <div className="dicecontainer"><div className="dice-top-left"></div><div className="dice-top-right"></div><div className="dice-bottom-left"></div><div className="dice-bottom-right">.</div><div className="dice-middle-left"></div><div className="dice-middle-right"></div></div>
    }
   
}


export default DiceValue