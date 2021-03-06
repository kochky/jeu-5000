import React, { useEffect } from 'react'

function KeepPoints({setAiWantToStop,aiWantToStop,whosPlaying,setFinalPoints,finalPoints,Points,setGameOver,provPoints,diceOne,diceTwo,diceThree,diceFour,diceFive}){//sauvegarde les points quand on arrête le tour volontairement avant le game over

    useEffect(()=>{
        if(aiWantToStop && whosPlaying==="player2"){
            handleClick()
            setAiWantToStop(false)
        }
    },[aiWantToStop])


    function handleClick(){
       
        if(whosPlaying==='player1'){
            setFinalPoints({...finalPoints,player1:finalPoints.player1 + Points +provPoints.total})
        } else if (whosPlaying==='player2'){
            setFinalPoints({...finalPoints,player2:finalPoints.player2 + Points +provPoints.total})
        }
        setGameOver(true)
    }
    if (whosPlaying==="player1"&&((diceOne.keep && !diceOne.confirmed)|| (diceTwo.keep&& !diceTwo.confirmed)|| (diceThree.keep &&!diceThree.confirmed) ||(diceFour.keep &&!diceFour.confirmed) ||(diceFive.keep && !diceFive.confirmed))){
        return (
            <button className="keep-button" onClick={handleClick}>Garder mes points</button>
        )
    }else {return ("")}
}

export default KeepPoints