import React from 'react'
import { useEffect } from 'react';
import {pointState} from '../constants/constants'

function Score({combo,provPoints,setProvPoints,Points,setPoints,GameOver,finalPoints}){


    useEffect(()=>{//Fais le calcul des points venant de l'état combo qui compte le nombre de dés gardés
        if(GameOver===false){
            if(combo.cinquante===0){
              setProvPoints(prevState=>({...prevState,cinquante:0}))}
            if(combo.cent===0){
              setProvPoints(prevState=>({...prevState,cent:0}))}
            if(combo.cinquante===1 ){
              setProvPoints(prevState=>({...prevState,cinquante:50}))}
            if(combo.cinquante===2 ){
              setProvPoints(prevState=>({...prevState,cinquante:100}))}
            if(combo.cinquante===3 ){
              setProvPoints(prevState=>({...prevState,cinquante:500}))}
            if(combo.cinquante===4 ){
              setProvPoints(prevState=>({...prevState,cinquante:550}))}
            if(combo.cinquante===5 ){
              setProvPoints(prevState=>({...prevState,cinquante:600}))}
            if(combo.cent===1 ){
              setProvPoints(prevState=>({...prevState,cent:100}))}
            if(combo.cent===2 ){
              setProvPoints(prevState=>({...prevState,cent:200}))}
            if(combo.cent===3 ){
              setProvPoints(prevState=>({...prevState,cent:1000}))}
            if(combo.cent===4 ){
              setProvPoints(prevState=>({...prevState,cent:1100}))}
            if(combo.cent===5 ){
              setProvPoints(prevState=>({...prevState,cent:1200}))}
            
           setProvPoints(prevState=>({...prevState,total:prevState.cinquante + prevState.cent}))
        }
    
    },[combo])
    
    useEffect(()=>{
    
      if(GameOver===true){
        setProvPoints(pointState)
        setPoints(0)
      }
    },[GameOver])


    return(
            <div>
             <div> score provi:{provPoints.total + Points}  </div>
             <div> score total joueur 1:{finalPoints.player1} </div>
             <div> score total joueur 2:{finalPoints.player2} </div>
              </div>



    )
}

export default Score