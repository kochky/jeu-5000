import React from 'react'
import Dices from './3DDices';
import '../css/NewGame.css';
import Menu from './Menu';


function NewGame(){

  
    return (
        <div className="new-game"> 
        <Dices />
            <h1 className='title'>Jeu du 5000</h1>
           <Menu />
        </div>
    )
}

export default NewGame