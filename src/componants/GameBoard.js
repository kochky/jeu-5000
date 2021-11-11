import React,{ useState } from 'react';
import '../css/GameBoard.css';
import Dice from './Dice';
import Roll from './Roll';
import ReTry from './ReTry';
import KeepPoints from './KeepPoints';
import Score from './Score';
import {pointState, initialState} from '../constants/constants'
import Win from './Win';

function Gameboard() {

  const [newGame, isNewGame]=useState(false)
  const [IsCurrentPlay,setIsCurrentPlay]= useState(0)//Etat du jeu lancé ou non
  const [GameOver,setGameOver]=useState(false)//Si les dés n'ont plus de 1 ou 5 le tour est terminé
  const [Points, setPoints]= useState(0)//Les points de chaque joueur du tour
  const [provPoints,setProvPoints]=useState(pointState)//prends les dés du combo et les transforme en points par jet de dés
  const [finalPoints,setFinalPoints]=useState({player1:0,player2:0})
  const [whosPlaying,setWhosPlaying]=useState('player1')//permet de changer de joueur
  const [combo,setCombo]=useState({cinquante:0,cent:0})//additionne le nombre de dés 
  const [leastOneDice,setLeastOneDice]=useState(false)//Au moins un dé est gardé pour relancer les autres dés

  const [diceOne,setDiceOne]=useState(initialState)
  const [diceTwo,setDiceTwo]=useState(initialState)
  const [diceThree,setDiceThree]=useState(initialState)
  const [diceFour,setDiceFour]=useState(initialState)
  const [diceFive,setDiceFive]=useState(initialState)

  if(finalPoints.player1 >=5000){return <div>Joueur 1 a gagné !!</div>}
  else if(finalPoints.player2 >=5000){return <div>Joueur 2 a gagné !!</div>}
  else{
    return(

      
      <React.Fragment>
    
        
        
        <div>Qui joue:{whosPlaying}</div>
        <Score  finalPoints={finalPoints} combo={combo} Points={Points} setPoints={setPoints} provPoints={provPoints} setProvPoints={setProvPoints} GameOver={GameOver} />
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
            whosPlaying={whosPlaying}
            setWhosPlaying={setWhosPlaying}

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
            <KeepPoints whosPlaying={whosPlaying} provPoints={provPoints}Points={Points}setFinalPoints={setFinalPoints} setGameOver={setGameOver} finalPoints={finalPoints} />
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
    </React.Fragment>
  
      )
  }
}

export default Gameboard;
