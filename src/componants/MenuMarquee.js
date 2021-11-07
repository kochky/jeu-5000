import { useState } from 'react'

function MenuMarquee({setIsClicked,style,string,classname,animation}){

    const [transformOrigin,setTransformOrigin]=useState('marquee-scale')

    function mouseEnter(e){//détecte si la souris arrive par le haut ou le bas
            if(e.clientY -e.currentTarget.getBoundingClientRect().top > 50 ){
               setTransformOrigin('marquee-scale transform-bottom')
            }else {
                setTransformOrigin('marquee-scale transform-top')
            }
        }
    
        function mouseLeave(e){
            if(e.clientY -e.currentTarget.getBoundingClientRect().top > 50 ){
                setTransformOrigin('marquee-scale leave-bottom')
             }else {
                 setTransformOrigin('marquee-scale leave-top')
             }
        }
    
    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="marquee">
            <div className={transformOrigin}>
                {animation}
                <div style={style} className={classname} >
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                    <span>{string}</span>
                </div>
            </div>   
            <p>{string}</p>

        </div>
    )
}

export default MenuMarquee