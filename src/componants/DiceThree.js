import {  useLoader } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React, { useEffect } from 'react';

import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'



function DiceThree({name,position,rotation,setCombo,state,setKeep,IsCurrentPlay,whosPlaying,time,setAiIsSelecting,setTotalDicesWillBe}) {
  

  const texture_1 = useLoader(TextureLoader, img);
  const texture_2 = useLoader(TextureLoader, dice6);
  const texture_3 = useLoader(TextureLoader, dice3);
  const texture_4 = useLoader(TextureLoader, dice4);
  const texture_5 = useLoader(TextureLoader, dice5);
  const texture_6 = useLoader(TextureLoader, dice2);
  
  const [ref,api] = useBox(() => ({ name:name,position:position,rotation:rotation,mass: 1}))
  
  useEffect(() => {
    window.setTimeout(function(){
    if(IsCurrentPlay && whosPlaying==="player2"){ 
      if (state.keep===false && (state.value===1|| state.value===5)){
        setKeep({...state,keep:true})
        setTotalDicesWillBe(prevState=>prevState+1)
        if(state.value===5){setCombo((prevState)=>({...prevState,cinquante: prevState.cinquante +1}))}
        if(state.value===1){setCombo((prevState)=>({...prevState,cent: prevState.cent +1}))}
      }
      setAiIsSelecting(prevState=>prevState+1)
    }
  },time)
  }, [state.value])
 

  useEffect(() => {
    if(state.keep && !state.confirmed){
      switch(name){
      case "one":
        api.position.set(-12,6,-10);
        break;
      case "two":
        api.position.set(-12,4,-10);
        break;
      case "three":
        api.position.set(-12,2,-10);
        break;
      case "four":
        api.position.set(-12,0,-10);
        break;
      case "five":
        api.position.set(-12,-2,-10);
        break; 
      default:;
      }
    }
  }, [state.keep])



  function handleClick(e) {
    if(IsCurrentPlay && whosPlaying==="player1"){ 
      if (state.keep===false && (state.value===1|| state.value===5)){
          setKeep({...state,keep:true})
          if(state.value===5){setCombo((prevState)=>({...prevState,cinquante: prevState.cinquante +1}))}
          if(state.value===1){setCombo((prevState)=>({...prevState,cent: prevState.cent +1}))}
       
      }else if(state.confirmed===false && state.keep){
          setKeep({...state,keep:false})
          if(state.value===5){setCombo((prevState)=>({...prevState,cinquante: prevState.cinquante -1}))}
          if(state.value===1){setCombo((prevState)=>({...prevState,cent: prevState.cent -1}))}
          switch(name){
            case "one":
              api.position.set(-7,0,-10);
              break;
            case "two":
              api.position.set(-3,0,-10);
              break;
            case "three":
              api.position.set(0,0,-10);
              break;
            case "four":
              api.position.set(3,0,-10);
              break;
            case "five":
              api.position.set(5,0,-10);
              break; 
            default:;
          }
      }
  }
}
    return (
        <mesh ref={ref} onClick={handleClick}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial map={texture_1} attachArray="material"  />
          <meshBasicMaterial map={texture_2} attachArray="material" />
          <meshBasicMaterial map={texture_3} attachArray="material" />
          <meshBasicMaterial map={texture_4} attachArray="material" />
          <meshBasicMaterial map={texture_5} attachArray="material" />
          <meshBasicMaterial map={texture_6} attachArray="material" />
        </mesh>
      )
}
    

export default DiceThree