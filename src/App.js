import React, { useState } from 'react'
import Dices from './componants/MenuThree';
import Menu from './componants/Menu';
import GameBoard3D from './componants/GameBoardThree';

import './css/NewGame.css';



function App(){

    const [isClicked,setIsClicked]=useState(false)
    
    return isClicked==="Nouvelle partie"?(
        <GameBoard3D setIsClicked={setIsClicked}/>
    )
    :(
        <div className="new-game"> 
            <Dices />
            <h1 className='title'>Jeu du 5000</h1>
            <Menu isClicked={isClicked} setIsClicked={setIsClicked} />
           
        </div>
    )
}

export default App