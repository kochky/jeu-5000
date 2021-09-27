import Cube from './DicesTree';
import React from 'react'
import Dices from './3DDices';

import '../css/NewGame.css';
import img from '../images/dice.svg'



function NewGame(){

    return (
        <div className="new-game"> 
        {/* <Dices /> */}
        <Dices />
            {/* <img src={img}/> */}
     
            <h1>Jeu du 5000</h1>
            <div className="new-game-buttons">
                <div>Nouvelle partie</div>
                <div>Règle du jeu</div>
            </div>
        </div>
    )
}

export default NewGame