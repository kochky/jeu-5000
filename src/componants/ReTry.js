import React from 'react'


function ReTry({whosPlaying,setWhosPlaying,setGameOver,setIsCurrentPlay,setDiceOne,diceOne,setDiceTwo,diceTwo,setDiceThree,diceThree,setDiceFour,diceFour,setDiceFive,diceFive}){

    function handleClick(){//Remet le jeu a zero en cas de GameOver
        setGameOver(false)
        setDiceOne({...diceOne,keep:false,confirmed:false})
        setDiceTwo({...diceTwo,keep:false,confirmed:false})
        setDiceThree({...diceThree,keep:false,confirmed:false})
        setDiceFour({...diceFour,keep:false,confirmed:false})
        setDiceFive({...diceFive,keep:false,confirmed:false})
        setIsCurrentPlay(0)
        if(whosPlaying==='player1'){setWhosPlaying('player2')}
        else if (whosPlaying==='player2'){setWhosPlaying('player1')}
      }
    return(
        <h1 className="end-message">Tour terminé <button className="end-button" onClick={handleClick}>Changement de joueur</button></h1>
    )
}

export default ReTry