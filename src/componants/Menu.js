import React,{useState,useEffect} from 'react'
import Modal from './Modal'
import MenuMarquee from './MenuMarquee'

function Menu({setIsClicked,isClicked}){

    const [width,setWidth]=useState(window.innerWidth)
    const [transformOrigin,setTransformOrigin]=useState('marquee-scale')

    useEffect(() => {//détecte le resizing de la fenêtre
        window.addEventListener('resize',()=>setWidth(window.innerWidth))
    }, [])


    const widthOverflow= width/2-6167//cale le nouvelle partie avec le marquee qui defile
    const divTransform= {
        transform: 'translate3d('+(widthOverflow)+'px, 0, 0)' ,
    }

    const widthOverflowRegle= width/2-6273 //cale les règles du jeu avec le marquee
    const divTransformRegle= {
        transform: 'translate3d('+(widthOverflowRegle)+'px, 0, 0)',
    }
   
    const nouvellePartieAnimation=  (<style>{`
        @keyframes marquee {
            0% {
                transform: translate3d(${widthOverflow}px, 0, 0) ;
            }
            100% {
                transform: translate3d(${widthOverflow-668}px, 0, 0) ;
            }
        }
    `}</style>)

    const regleAnimation=(<style>{`
        @keyframes marqueeRegle {
            0% {
                transform: translate3d(${widthOverflowRegle}px, 0, 0) ;
            }
            100% {
                transform: translate3d(${widthOverflowRegle-560}px, 0, 0) ;
            }
        }
        `}</style>

    )

    return (
        <div className="new-game-buttons">
           
            <MenuMarquee setIsClicked={setIsClicked} style={divTransform} string={"Nouvelle partie"} classname={"marquee__inner nouvelle-partie"} animation={nouvellePartieAnimation} />            
            {isClicked && <Modal setIsClicked={setIsClicked} name={isClicked} />}  
            <MenuMarquee setIsClicked={setIsClicked} style={divTransformRegle} string={"Règles du jeu"} classname={"marquee__inner regle-du-jeu"} animation={regleAnimation} />            
           
        </div>
        )
        // :(
        //   <Modal />  
        // )

}

export default Menu