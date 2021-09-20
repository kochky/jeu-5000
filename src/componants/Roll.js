import React, { useState, useEffect } from 'react';

function DiceValue(){
        return Math.floor(Math.random() * 6) + 1;
}

function Roll({setGameOver,GameOver,setCombo,combo,setPoints,Points,setIsCurrentPlay,IsCurrentPlay,leastOneDice,setLeastOneDice,diceOne,diceTwo,diceThree,diceFour,diceFive,setDiceOne,setDiceTwo,setDiceThree,setDiceFour,setDiceFive}){
   
    const[step,setStep]=useState(0)

    useEffect(()=>{//Change la valeur des dés s'ils sont toujours en jeu
    
        if( step===2 &&( leastOneDice || IsCurrentPlay===1 )){
            console.log("relance dé")
            if(diceOne.keep===false ){setDiceOne({...diceOne,value:DiceValue()})}
            if(diceTwo.keep===false){ setDiceTwo({...diceTwo,value:DiceValue()})}
            if(diceThree.keep===false){setDiceThree({...diceThree,value:DiceValue()})}
            if(diceFour.keep===false){ setDiceFour({...diceFour,value:DiceValue()})}
            if(diceFive.keep===false){setDiceFive({...diceFive,value:DiceValue()})}
            setStep(1)
        }
    },[step])
    
    useEffect(()=>{//Si les 5 dés sont gardés alors ils sont de retour en jeu
        if(step===3){
            if(diceOne.confirmed&& diceTwo.confirmed && diceThree.confirmed && diceFour.confirmed && diceFive.confirmed){
                setDiceOne({...diceOne,keep:false,confirmed:false})
                setDiceTwo({...diceTwo,keep:false,confirmed:false})
                setDiceThree({...diceThree,keep:false,confirmed:false})
                setDiceFour({...diceFour,keep:false,confirmed:false})
                setDiceFive({...diceFive,keep:false,confirmed:false})
                setIsCurrentPlay(1)
            }  
            setStep(2)
        }
    },[step])

      useEffect(()=>{//Si aucun 1 ou 5 ne sortent, le tour est fini
        if(step===1)   {
            if((diceOne.value===5 && diceOne.confirmed!==true) || (diceOne.value===1&& diceOne.confirmed!==true) ||(diceTwo.value===5&& diceTwo.confirmed!==true) || (diceTwo.value===1&& diceTwo.confirmed!==true) || (diceThree.value===5 && diceThree.confirmed!==true)|| (diceThree.value===1&& diceThree.confirmed!==true)|| (diceFour.value ===5 && diceFour.confirmed!==true)|| (diceFour.value===1&& diceFour.confirmed!==true)|| (diceFive.value===5&& diceFive.confirmed!==true) || (diceFive.value===1&& diceFive.confirmed!==true)){
           setGameOver(false)
            }else{
                setGameOver(true)
            }
            setStep(4)
        }
          
    },[step])

    useEffect(()=>{
        if(step===4 && GameOver===false){
           

            if(combo.cinquante===1 ){
                setPoints((prevState)=>({player1: prevState.player1 +50}))
            }
            if(combo.cinquante===2 ){
                setPoints((prevState)=>({player1: prevState.player1 +100}))            }
            if(combo.cinquante===3 ){
                setPoints((prevState)=>({player1: prevState.player1 +500}))            }
            if(combo.cinquante===4 ){
                setPoints((prevState)=>({player1: prevState.player1 +550}))            }
            if(combo.cinquante===5 ){
                setPoints((prevState)=>({player1: prevState.player1 +600}))            }
            if(combo.cent===1 ){
                setPoints((prevState)=>({player1: prevState.player1 +100}))            }
            if(combo.cent===2 ){
                setPoints((prevState)=>({player1: prevState.player1 +200}))            }
            if(combo.cent===3 ){
                setPoints((prevState)=>({player1: prevState.player1 +1000}))            }
            if(combo.cent===4 ){
                setPoints((prevState)=>({player1: prevState.player1 +1100}))            }
            if(combo.cent===5 ){
                setPoints((prevState)=>({player1: prevState.player1 +1200}))            }

            setStep(0)
        }
    
          
    },[step])

   function handleClick(){//Valide mes dés gardés de côté quand je relance les dés
  
           if(step===0 && GameOver===false){
            setCombo({...setCombo,cinquante:0,cent:0})
            setLeastOneDice(false)
            setIsCurrentPlay(IsCurrentPlay+1)
            setGameOver()
            setStep(3)
            
            if (diceOne.keep===true && diceOne.confirmed===false){
                setDiceOne({...diceOne,confirmed:true})
                setLeastOneDice(true)
                if(diceOne.value===5){setCombo((prevState)=>({cinquante: prevState.cinquante +1}))}
                if(diceOne.value===1){setCombo((prevState)=>({cent: prevState.cent +1}))}
                }
                
            if (diceTwo.keep===true && diceTwo.confirmed===false){
                setDiceTwo({...diceTwo,confirmed:true})
                setLeastOneDice(true)
                if(diceTwo.value===5){setCombo((prevState)=>({cinquante: prevState.cinquante +1}))}
                if(diceTwo.value===1){setCombo((prevState)=>({cent: prevState.cent +1}))}
                }

            if (diceThree.keep===true && diceThree.confirmed===false){
                setDiceThree({...diceThree,confirmed:true})
                setLeastOneDice(true)
                if(diceThree.value===5){setCombo((prevState)=>({cinquante: prevState.cinquante +1}))}
                if(diceThree.value===1){setCombo((prevState)=>({cent: prevState.cent +1}))}
                }

            if (diceFour.keep===true && diceFour.confirmed===false){
                setDiceFour({...diceFour,confirmed:true})
                setLeastOneDice(true)
                if(diceFour.value===5){setCombo((prevState)=>({cinquante: prevState.cinquante +1}))}
                if(diceFour.value===1){setCombo((prevState)=>({cent: prevState.cent +1}))}
                }

            if (diceFive.keep===true && diceFive.confirmed===false){
                setDiceFive({...diceFive,confirmed:true})
                setLeastOneDice(true)
                if(diceFive.value===5){setCombo((prevState)=>({cinquante: prevState.cinquante +1}))}
                if(diceFive.value===1){setCombo((prevState)=>({cent: prevState.cent +1}))}
                }  
           }
    }
    

    return(
        <button onClick={handleClick} >Lancer les dés</button>
    )
}

export default Roll