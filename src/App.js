import { useState, useEffect } from 'react';
import './App.css';
import Dice from './componants/Dice';
import Roll from './componants/Roll';
import ReTry from './componants/ReTry';
import KeepPoints from './componants/KeepPoints';
import Score from './componants/Score';
import {pointState, initialState} from './constants/constants'

function App() {

  const [IsCurrentPlay,setIsCurrentPlay]= useState(0)//Etat du jeu lancé ou non
  const [GameOver,setGameOver]=useState(false)//Si les dés n'ont plus de 1 ou 5 le tour est terminé
  const [Points, setPoints]= useState({player1:0,player2:0})//Les points de chaque joueur du tour
  const [provPoints,setProvPoints]=useState(pointState)//prends les dés du combo et les transforme en points par jet de dés
  const [finalPoints,setFinalPoints]=useState({player1:0,player2:0})
    
  const [combo,setCombo]=useState({cinquante:0,cent:0})//additionne le nombre de dés 
  const [leastOneDice,setLeastOneDice]=useState(false)//Au moins un dé est gardé pour relancer les autres dés

  const [diceOne,setDiceOne]=useState(initialState)
  const [diceTwo,setDiceTwo]=useState(initialState)
  const [diceThree,setDiceThree]=useState(initialState)
  const [diceFour,setDiceFour]=useState(initialState)
  const [diceFive,setDiceFive]=useState(initialState)


return(
    
    <div className="container">
      <Score finalPoints={finalPoints} combo={combo} Points={Points} setPoints={setPoints} provPoints={provPoints} setProvPoints={setProvPoints} GameOver={GameOver} />
      {IsCurrentPlay?(<div className="dice-container">
        <Dice setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceOne} setKeep={setDiceOne}/>
        <Dice setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceTwo} setKeep={setDiceTwo}/>
        <Dice setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceThree} setKeep={setDiceThree}/>
        <Dice setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceFour} setKeep={setDiceFour}/>
        <Dice setCombo={setCombo} IsCurrentPlay={IsCurrentPlay} state={diceFive} setKeep={setDiceFive}/>
      </div>):
      (<div>Lancez les dés pour commencer!</div>)}
       
      { GameOver===true?(
       <ReTry 
          setGameOver={setGameOver}  
          setIsCurrentPlay={setIsCurrentPlay}

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
          <KeepPoints  provPoints={provPoints}Points={Points}setFinalPoints={setFinalPoints} setGameOver={setGameOver} finalPoints={finalPoints} />
          <Roll 
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
          />
        </div>
       )}
    </div>
   
  
    )
}

export default App;
