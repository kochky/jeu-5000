import React,{useState,useEffect} from 'react'

function Menu(){

    const [width,setWidth]=useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize',()=>setWidth(window.innerWidth))
    }, [])
    
    useEffect(() => {
       console.log(width)
    }, [width])

    const widthOverflow= width/2-6167
    const divTransform= {
        transform: 'translate3d('+(widthOverflow)+'px, 0, 0)' ,
        animation:'marquee 5s linear infinite 300ms paused',
    }

    const widthOverflowRegle= width/2-6273
    const divTransformRegle= {
        transform: 'translate3d('+(widthOverflowRegle)+'px, 0, 0)',
        animation:'marqueeRegle 5s linear infinite 300ms paused',
  
    }


    return(
        <div className="new-game-buttons">
            <div className="marquee">
               <div className='marquee-scale'>
               <style>{`
           @keyframes marquee {
            0% {
                transform: translate3d(${widthOverflow}px, 0, 0) ;
            }
            100% {
                transform: translate3d(${widthOverflow-668}px, 0, 0) ;
            }
        }
        `}</style>
                <div style={divTransform}className="marquee__inner nouvelle-partie">
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                        <span>NOUVELLE PARTIE</span>
                    </div>
                </div> 
                <p>Nouvelle partie</p>
            </div>

            <div className="marquee">
                <div className='marquee-scale'>
                <style>{`
           @keyframes marqueeRegle {
            0% {
                transform: translate3d(${widthOverflowRegle}px, 0, 0) ;
            }
            100% {
                transform: translate3d(${widthOverflowRegle-668}px, 0, 0) ;
            }
        }
        `}</style>
                    <div style={divTransformRegle} className="marquee__inner regle-du-jeu" >
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                        <span>REGLES DU JEU</span>
                    </div>
                </div>   
                <p>Règles du jeu</p>
            </div>
        </div>
    )

}

export default Menu