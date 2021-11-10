import '../css/Modal.css';
import img from '../images/cross.svg'


function Modal({setIsClicked,name}){

    return name==="Règles du jeu"? (
        <div className="modal">
            <div className="modal-head">Règles du jeu</div>
            <div className="modal-body">
                <img onClick={()=>setIsClicked(false)}className="modal-cross"width={30} src={img}/>
                Le but du jeu étant de totaliser le premier 5000 points.<br/><br/>
            
                Lancer les 5 dés qui doivent sortir As ou 5. Sinon passer votre tour.<br/><br/>

                Retirer les as ou 5 . Rejouer en retirant as ou 5 et arrêter suivant son initiative.<br/>
                Si au cours d’un jet, ne sort ni as ni 5, tout est perdu et on passe au suivant.<br/>
                Si le joueur retire tous les dés manquants, il peut recommencer avec les 5 dés en continuant à additionner.<br/><br/><br/>

                Valeur:<br/><br/>

                    As : 100 points<br/>
                    5 : 50 points<br/>
                    3 dés as : 1000 points<br/>
                    3 dés de 5 : 500 points<br/>

                </div>
        </div>
     ):('')
}

export default Modal