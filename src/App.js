import React, { useState, useEffect } from 'react'
import Dices from './componants/Menu3D';
import Menu from './componants/Menu';
import GameBoard3D from './componants/GameBoard3D';

import './css/NewGame.css';



function App(){

    const [isClicked,setIsClicked]=useState(false)
    useEffect(() => {
     console.log(isClicked)
    }, [isClicked])
    
    return (
        <div className="new-game"> 
        {(!isClicked || isClicked==="Règles du jeu") ?(
            <React.Fragment>
                <Dices />
                <h1 className='title'>Jeu du 5000</h1>
            </React.Fragment>  
                  ):(
            <GameBoard3D />
                  )}
           <Menu isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
    )
}

export default App