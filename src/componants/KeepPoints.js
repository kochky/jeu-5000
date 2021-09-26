import React from 'react'


function KeepPoints({whosPlaying,setFinalPoints,finalPoints,Points,setGameOver,provPoints}){//sauvegarde les points quand on arrête le tour volontairement avant le game over

    function handleClick(){
       
        
        
        if(whosPlaying==='player1'){
            setFinalPoints({...finalPoints,player1:finalPoints.player1 + Points +provPoints.total})
        } else if (whosPlaying==='player2'){
            setFinalPoints({...finalPoints,player2:finalPoints.player2 + Points +provPoints.total})

        }

        setGameOver(true)
        
        

    }

    return (
        <button onClick={handleClick}>Garder mes points</button>
    )
}


export default KeepPoints