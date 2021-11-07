function Modal(){

    return (
        <div className="modal">
            <div className="modal-regles">
            Le but du jeu étant de totaliser le premier 5000 points.
           
            Lancer les 5 dés qui doivent sortir As ou 5. Sinon passer votre tour.

            Retirer les as ou 5 . Rejouer en retirant as ou 5 et arrêter suivant son initiative.
            Si au cours d’un jet, ne sort ni as ni 5, tout est perdu et on passe au suivant.
            Si le joueur retire tous les dés manquants, il peut recommencer avec les 5 dés en continuant à additionner.

             Valeur:

                As : 100 points
                5 : 50 points
                3 as : 1000 points
                3 5 :  500 points

            </div>
        </div>
     )
}

export default Modal