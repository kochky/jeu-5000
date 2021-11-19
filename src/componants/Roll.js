import React, { useState, useEffect } from 'react';
import {pointState} from '../constants/constants'


function DiceValue(){
        return Math.floor(Math.random() * 6) + 1;
}

function Roll({totalDicesWillBe,setTotalDicesWillBe,aiIsSelecting,setAiIsSelecting,totalDices,setTotalDices,setAiWantToStop,setRolled,setGameOver,GameOver,provPoints,setProvPoints,setPoints,Points,setCombo,setIsCurrentPlay,IsCurrentPlay,leastOneDice,setLeastOneDice,diceOne,diceTwo,diceThree,diceFour,diceFive,setDiceOne,setDiceTwo,setDiceThree,setDiceFour,setDiceFive,whosPlaying}){
    const[step,setStep]=useState(0)
   
    useEffect(()=>{
        if(step===4) {
            setAiIsSelecting(0)
            setRolled(false)
            setLeastOneDice(false)
            setAiWantToStop(false)
            setPoints(prevState=>(prevState + provPoints.total))//valide les points provisoires en vrai point du tour
            setProvPoints(pointState)
            setCombo({...setCombo,cinquante:0,cent:0})//remet a zero les combos pour calculer les prochains points des dés
            setIsCurrentPlay(IsCurrentPlay+1)//permet de voir si la partie est lancée et si c'est le premier jet de dé
            setGameOver()//efface le game over en cas de relance

            if (diceOne.keep===true && diceOne.confirmed===false){
                setDiceOne({...diceOne,confirmed:true})
                setLeastOneDice(true)
                setTotalDices(prevState=>prevState+1)
                
                }
                
            if (diceTwo.keep===true && diceTwo.confirmed===false){
                setDiceTwo({...diceTwo,confirmed:true})
                setLeastOneDice(true)
                setTotalDices(prevState=>prevState+1)

                }

            if (diceThree.keep===true && diceThree.confirmed===false){
                setDiceThree({...diceThree,confirmed:true})
                setLeastOneDice(true)
                setTotalDices(prevState=>prevState+1)

                }

            if (diceFour.keep===true && diceFour.confirmed===false){
                setDiceFour({...diceFour,confirmed:true})
                setLeastOneDice(true)
                setTotalDices(prevState=>prevState+1)

                }
            
            if (diceFive.keep===true && diceFive.confirmed===false){
                setDiceFive({...diceFive,confirmed:true})
                setLeastOneDice(true)
                setTotalDices(prevState=>prevState+1)

                } 
        setStep(3)
        }
        if(step===3){//Si les 5 dés sont gardés alors ils sont de retour en jeu
            if(diceOne.confirmed&& diceTwo.confirmed && diceThree.confirmed && diceFour.confirmed && diceFive.confirmed){
                setDiceOne({...diceOne,keep:false,confirmed:false})
                setDiceTwo({...diceTwo,keep:false,confirmed:false})
                setDiceThree({...diceThree,keep:false,confirmed:false})
                setDiceFour({...diceFour,keep:false,confirmed:false})
                setDiceFive({...diceFive,keep:false,confirmed:false})
                setIsCurrentPlay(1)
                setTotalDices(0)
                setTotalDicesWillBe(0)
            }  
        
            setStep(2)
        }else if( step===2){//Change la valeur des dés s'ils sont toujours en jeu
            if( leastOneDice || IsCurrentPlay===1 ){
                if(diceOne.keep===false){setDiceOne({...diceOne,value:DiceValue()})}
                if(diceTwo.keep===false){setDiceTwo({...diceTwo,value:DiceValue()})}
                if(diceThree.keep===false){setDiceThree({...diceThree,value:DiceValue()})}
                if(diceFour.keep===false){setDiceFour({...diceFour,value:DiceValue()})}
                if(diceFive.keep===false){setDiceFive({...diceFive,value:DiceValue()})}
            }
            setStep(1)
        }else if(step===1)   {//Si aucun 1 ou 5 ne sortent, le tour est fini
            if((diceOne.value===5 && diceOne.confirmed!==true) || (diceOne.value===1&& diceOne.confirmed!==true) ||(diceTwo.value===5&& diceTwo.confirmed!==true) || (diceTwo.value===1&& diceTwo.confirmed!==true) || (diceThree.value===5 && diceThree.confirmed!==true)|| (diceThree.value===1&& diceThree.confirmed!==true)|| (diceFour.value ===5 && diceFour.confirmed!==true)|| (diceFour.value===1&& diceFour.confirmed!==true)|| (diceFive.value===5&& diceFive.confirmed!==true) || (diceFive.value===1&& diceFive.confirmed!==true)){
                setGameOver(false)
            }else{
                setGameOver(true)
            }
            setStep(0)
            setRolled(true)
        } 
    },[step])


    useEffect(() => {//Automatise le joueur 2
        setTimeout(()=>{
            if(whosPlaying==="player2"){
                setTotalDicesWillBe(0)
                setStep(4)
            }
        },600)
    }, [whosPlaying])

    useEffect(() => {//Ai décide de rejouer ou non
        setTimeout(()=>{
        if(whosPlaying==="player2" && totalDices+aiIsSelecting===5){
            if( totalDicesWillBe===1 ||totalDicesWillBe===2 || totalDicesWillBe===5){
                setStep(4)  
            }else {
                setAiWantToStop(true)
        }}
    },1000)
       },[aiIsSelecting])
  
    

   function handleClick(){//Valide mes dés gardés de côté quand je relance les dés  
        if(step===0 && GameOver===false && whosPlaying==="player1"){   
        setStep(4)
           }
    }
    if(whosPlaying==="player1"){
        if((diceOne.keep && !diceOne.confirmed)|| (diceTwo.keep&& !diceTwo.confirmed)|| (diceThree.keep &&!diceThree.confirmed) ||(diceFour.keep &&!diceFour.confirmed) ||(diceFive.keep && !diceFive.confirmed) || IsCurrentPlay===0 ){
        return (<button className="roll-button" onClick={handleClick}>Lancer les dés</button> )}
        else{return (<div className="pick-message">Choisissez au moins un dé</div>)}
    }else {return ('')}
}

export default Roll