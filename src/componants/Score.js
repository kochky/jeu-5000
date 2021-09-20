import { useState, useEffect } from 'react';
import {pointState} from '../constants/constants'

function Score({combo,provPoints,setProvPoints,Points,setPoints,GameOver}){


    useEffect(()=>{//Fais le calcul des points venant de l'état combo qui compte le nombre de dés gardés
        if(GameOver===false){
            if(combo.cinquante===0){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:0}}])}
            if(combo.cent===0){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:0}}])}
            if(combo.cinquante===1 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:50}}])}
            if(combo.cinquante===2 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:100}}])}
            if(combo.cinquante===3 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:500}}])}
            if(combo.cinquante===4 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:550}}])}
            if(combo.cinquante===5 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cinquante:600}}])}
            if(combo.cent===1 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:100}}])}
            if(combo.cent===2 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:200}}])}
            if(combo.cent===3 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:1000}}])}
            if(combo.cent===4 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:1100}}])}
            if(combo.cent===5 ){
              setProvPoints(prevState=>[{...prevState[0],player1:{...prevState[0].player1,cent:1200}}])}
            
            setProvPoints(prevState=>[{...provPoints[0],player1:{...provPoints[0].player1,total:prevState[0].player1.cinquante + prevState[0].player1.cent}}])
        }
    
    },[combo])
    
    useEffect(()=>{
    
      if(GameOver===true){
        setProvPoints(pointState)
        setPoints({...provPoints,player1:0,player2:0})
      }
    },[GameOver])


    return(
            <div>score provi:{provPoints[0].player1.total + Points.player1}  </div>



    )
}

export default Score