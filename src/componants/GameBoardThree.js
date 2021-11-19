import React, { Suspense,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Roll from './Roll';
import ReTry from './ReTry';
import KeepPoints from './KeepPoints';
import Score from './Score';
import {pointState, initialState} from '../constants/constants'
import Plane from './PlaneThree'
import DiceThree from './DiceThree'
import valueToRotation from '../constants/valueToRotation'
import img from '../images/cross.svg'
import imgyellow from '../images/crossyellow.svg'
import '../css/GameBoard.css';





function GameBoard3D({setIsClicked}){
  
  
  const [IsCurrentPlay,setIsCurrentPlay]= useState(0)//Etat du jeu lancé ou non
  const [GameOver,setGameOver]=useState(false)//Si les dés n'ont plus de 1 ou 5 le tour est terminé
  const [Points, setPoints]= useState(0)//Les points de chaque joueur du tour
  const [provPoints,setProvPoints]=useState(pointState)//prends les dés du combo et les transforme en points par jet de dés
  const [finalPoints,setFinalPoints]=useState({player1:0,player2:0})
  const [whosPlaying,setWhosPlaying]=useState('player1')//permet de changer de joueur
  const [aiWantToStop,setAiWantToStop]=useState(false)//se met true quand l'ai veut arrêter pour déclencher le changement de joueur
  const [combo,setCombo]=useState({cinquante:0,cent:0})//additionne le nombre de dés 
  const [leastOneDice,setLeastOneDice]=useState(true)//Au moins un dé est gardé pour relancer les autres dés
  const [totalDices,setTotalDices]=useState(0)//comptabilise le nombre de dés gardés
  const [totalDicesWillBe,setTotalDicesWillBe]=useState(0)//comptabilise le nombre de dés gardés

  const [aiIsSelecting,setAiIsSelecting]=useState(0)//s'assure que tout les valeurs des dés ont été vérifié pour l'AI avant de relancer
  const [rolled,setRolled]=useState(false)//attends la valeur des dés avant de lancer l'animation

  const [diceOne,setDiceOne]=useState(initialState)
  const [diceTwo,setDiceTwo]=useState(initialState)
  const [diceThree,setDiceThree]=useState(initialState)
  const [diceFour,setDiceFour]=useState(initialState)
  const [diceFive,setDiceFive]=useState(initialState)

 
    return(
      <React.Fragment >
      <div className="effect-new-game">
        <p>Nouvelle Partie</p>
        <div className="effect-background"></div>
        <div className="div-blue"></div>
      </div>
      <div className="effect-reversed">
        <p>Nouvelle Partie</p>
        <div className="div-yellow"></div>
      </div>

      <div className="container">
        { finalPoints.player1>=5000 && <div className="win"><div><p>Player1 a gagné !</p></div> <img alt="close icon"onClick={()=>setIsClicked(false)}className="modal-cross"width={30} src={imgyellow}/></div>}
        { finalPoints.player2>=5000 && <div className="win"><div><p>Player2 a gagné !</p></div> <img alt="close icon"onClick={()=>setIsClicked(false)}className="modal-cross"width={30} src={imgyellow}/></div>}

        <img alt="close icon"onClick={()=>setIsClicked(false)}className="modal-cross translateX"width={30} src={img}/>
        <Canvas style={{height:'80vw'}} linear="true" concurrent sRGB className="gameboard"  camera={{fov:60, position: [0, 0, 10] }}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, 0, -25]}>
                    <Plane  position={[0, 0, -10]}/>
                    <Plane  position={[-16, 0, -10]} rotation={[0, 0.9, 0]} />
                    <Plane  position={[16, 0, -10]} rotation={[0, -0.9, 0]} />
                    <Plane  position={[0, 11, -10]} rotation={[0.9, 0, 0]} />
                    <Plane  position={[0, -2, -10]} rotation={[-0.9, 0, 0]} />
                    {((IsCurrentPlay && rolled) || diceOne.keep) && <DiceThree setTotalDicesWillBe={setTotalDicesWillBe} setAiIsSelecting={setAiIsSelecting} time="4000" whosPlaying={whosPlaying} setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceOne} setKeep={setDiceOne} name="one" position={[-7,-5,1]} rotation={valueToRotation(diceOne.value)} />}
                    {((IsCurrentPlay && rolled) || diceTwo.keep) && <DiceThree setTotalDicesWillBe={setTotalDicesWillBe} setAiIsSelecting={setAiIsSelecting} time="4500" whosPlaying={whosPlaying} setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceTwo} setKeep={setDiceTwo} name="two" position={[-3,-5,1]} rotation={valueToRotation(diceTwo.value)} />}
                    {((IsCurrentPlay && rolled) || diceThree.keep) && <DiceThree setTotalDicesWillBe={setTotalDicesWillBe} setAiIsSelecting={setAiIsSelecting} time="5000" whosPlaying={whosPlaying} setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceThree} setKeep={setDiceThree} name="three" position={[0,-5,1]} rotation={valueToRotation(diceThree.value)}/>}
                    {((IsCurrentPlay && rolled) || diceFour.keep) && <DiceThree setTotalDicesWillBe={setTotalDicesWillBe} setAiIsSelecting={setAiIsSelecting} time="5500" whosPlaying={whosPlaying} setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceFour} setKeep={setDiceFour} name="four" position={[3,-5,1]} rotation={valueToRotation(diceFour.value)}/>}
                    {((IsCurrentPlay && rolled) || diceFive.keep) && <DiceThree setTotalDicesWillBe={setTotalDicesWillBe} setAiIsSelecting={setAiIsSelecting} time="6000" whosPlaying={whosPlaying} setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceFive} setKeep={setDiceFive} name="five" position={[7,-5,1]} rotation={valueToRotation(diceFive.value)}/>}                    
                </Physics>
            </Suspense>
        </Canvas>
        <div className="container-dashboard">
          <div className="player-message">Qui joue:{whosPlaying}</div>
          <Score  finalPoints={finalPoints} combo={combo} Points={Points} setPoints={setPoints} provPoints={provPoints} setProvPoints={setProvPoints} GameOver={GameOver} />
          {(IsCurrentPlay===0&& whosPlaying==="player1") && <h1 className="launch-message">Lancez les dés pour commencer !</h1>}
          {(IsCurrentPlay===0&& whosPlaying==="player2") && <h1 className="launch-message">Player2 lance les dés !</h1>}

          { GameOver===true?(
          <ReTry 
              whosPlaying={whosPlaying}
              setWhosPlaying={setWhosPlaying}

              setGameOver={setGameOver}  
              setIsCurrentPlay={setIsCurrentPlay}
              setTotalDices={setTotalDices}


              setDiceOne={setDiceOne}
              diceOne={diceOne} 

              setDiceTwo={setDiceTwo} 
              diceTwo={diceTwo} 

              setDiceThree={setDiceThree} 
              diceThree={diceThree} 

              setDiceFour={setDiceFour} 
              diceFour={diceFour} 

              setDiceFive={setDiceFive}
              diceFive={diceFive} 
            />
            )
          :(<div>
              <KeepPoints
                setAiWantToStop={setAiWantToStop}
                aiWantToStop={aiWantToStop}
                whosPlaying={whosPlaying} 
                provPoints={provPoints}
                Points={Points}
                setFinalPoints={setFinalPoints} 
                setGameOver={setGameOver} 
                finalPoints={finalPoints} 

                diceOne={diceOne} 

                diceTwo={diceTwo} 

                diceThree={diceThree} 

                diceFour={diceFour} 

                diceFive={diceFive} 

              />
              <Roll
              setTotalDicesWillBe={setTotalDicesWillBe}
                totalDicesWillBe={totalDicesWillBe}
                  setAiIsSelecting={setAiIsSelecting}
                  aiIsSelecting={aiIsSelecting}

                  setTotalDices={setTotalDices}
                  totalDices={totalDices}
                  setAiWantToStop={setAiWantToStop}
                  
                  setRolled={setRolled}
                
                  setGameOver={setGameOver}
                  GameOver={GameOver}
                  
                  setCombo={setCombo}
                  
                  setProvPoints={setProvPoints}
                  provPoints={provPoints}
                  
                  Points={Points}
                  setPoints={setPoints}
                
                  setIsCurrentPlay={setIsCurrentPlay}
                  IsCurrentPlay={IsCurrentPlay}

                  setLeastOneDice={setLeastOneDice}
                  leastOneDice={leastOneDice}

                  setDiceOne={setDiceOne}
                  diceOne={diceOne} 

                  setDiceTwo={setDiceTwo} 
                  diceTwo={diceTwo} 

                  setDiceThree={setDiceThree} 
                  diceThree={diceThree} 

                  setDiceFour={setDiceFour} 
                  diceFour={diceFour} 

                  setDiceFive={setDiceFive}
                  diceFive={diceFive} 

                  whosPlaying={whosPlaying}
              />
            </div>
          )}
        </div>
      </div>
      </React.Fragment>)

}
  
 export default GameBoard3D