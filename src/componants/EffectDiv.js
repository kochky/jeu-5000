import React from 'react'

function EffectDiv() {
    return (
        <React.Fragment>
            <div className="effect-new-game">
                <p>Nouvelle Partie</p>
                <div className="effect-background"></div>
                <div className="div-blue"></div>
            </div>
            <div className="effect-reversed">
                <p>Nouvelle Partie</p>
                <div className="div-yellow"></div>
            </div>
        </React.Fragment>

    )
}

export default EffectDiv