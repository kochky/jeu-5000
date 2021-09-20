

function KeepPoints({setFinalPoints,finalPoints,Points,setGameOver,provPoints}){

    function handleClick(){
        setFinalPoints({...finalPoints,player1:finalPoints.player1 + Points.player1 +provPoints[0].player1.total})
        setGameOver(true)
        

    }

    return (
        <button onClick={handleClick}>Garder mes points</button>
    )
}


export default KeepPoints