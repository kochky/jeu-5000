import { useState, useEffect } from 'react';
import './App.css';
import Dice from './componants/Dice';
import Roll from './componants/Roll';
import ReTry from './componants/ReTry';

function App() {
  const [IsCurrentPlay,setIsCurrentPlay]= useState(0)//Etat du jeu lancé ou non
  const [GameOver,setGameOver]=useState(false)//Si les dés n'ont plus de 1 ou 5 le tour est terminé
  const [Points, setPoints]= useState({player1:0, player2:0})//Les points de chaque joueur
  const [combo,setCombo]=useState({cinquante:0,cent:0})
  const [leastOneDice,setLeastOneDice]=useState(false)//Au moins un dé est gardé pour relancer les autres dés


  const initialState={value:1, keep:false, confirmed:false}//Valeur du dé, s'i l'utilsateur le garde, le choix est confirmé quand les dés sont relancés
  const [diceOne,setDiceOne]=useState(initialState)
  const [diceTwo,setDiceTwo]=useState(initialState)
  const [diceThree,setDiceThree]=useState(initialState)
  const [diceFour,setDiceFour]=useState(initialState)
  const [diceFive,setDiceFive]=useState(initialState)



return(
    
    <div className="container">
      <div>{Points.player1}</div>
      {IsCurrentPlay?(<div className="dice-container">
        <Dice  IsCurrentPlay={IsCurrentPlay} state={diceOne} setKeep={setDiceOne}/>
        <Dice  IsCurrentPlay={IsCurrentPlay} state={diceTwo} setKeep={setDiceTwo}/>
        <Dice  IsCurrentPlay={IsCurrentPlay} state={diceThree} setKeep={setDiceThree}/>
        <Dice  IsCurrentPlay={IsCurrentPlay} state={diceFour} setKeep={setDiceFour}/>
        <Dice  IsCurrentPlay={IsCurrentPlay} state={diceFive} setKeep={setDiceFive}/>
      </div>):(<div>Lancez les dés pour commencer!</div>)}
       
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
       :(
       <Roll 
          setGameOver={setGameOver}
          GameOver={GameOver}
          setCombo={setCombo}
          combo={combo}
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
       )}
    </div>
   
  
    )
}

export default App;
