import React, { Suspense,useState,useEffect,useRef } from 'react'
import { Canvas, useLoader,useFrame } from 'react-three-fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'



function Plane(props) {
    const [ref] = usePlane(() => ({ ...props }))
    return (
      <mesh ref={ref} >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshBasicMaterial attach="material" color="#e9c46a" />
      </mesh>
    )
}


function Cube(props) {

const texture_1 = useLoader(TextureLoader, img);
const texture_2 = useLoader(TextureLoader, dice6);
const texture_3 = useLoader(TextureLoader, dice3);
const texture_4 = useLoader(TextureLoader, dice4);
const texture_5 = useLoader(TextureLoader, dice5);
const texture_6 = useLoader(TextureLoader, dice2);

const [ref,api] = useBox(() => ({ mass: 1,...props}))

const [alreadyKeeped,setAlreadyKeeped]=useState(false)

function handleClick(e) {
  if(!alreadyKeeped){
    switch(props.name){
      case "one":
        api.position.set(-12,6,-10);
        break;
      case "two":
        api.position.set(-12,4,-10);
        break;
      case "three":
        api.position.set(-12,2,-10);
        break;
      case "four":
        api.position.set(-12,0,-10);
        break;
      case "five":
        api.position.set(-12,-2,-10);
        break; 
    }
    setAlreadyKeeped(true)
  }else {
    switch(props.name){
      case "one":
        api.position.set(-7,0,-10);
        break;
      case "two":
        api.position.set(-3,0,-10);
        break;
      case "three":
        api.position.set(0,0,-10);
        break;
      case "four":
        api.position.set(3,0,-10);
        break;
      case "five":
        api.position.set(5,0,-10);
        break; 
    }
    setAlreadyKeeped(false)
  }
}
  

return (
    <mesh ref={ref} onClick={handleClick}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial map={texture_1} attachArray="material"  />
      <meshBasicMaterial map={texture_2} attachArray="material" />
      <meshBasicMaterial map={texture_3} attachArray="material" />
      <meshBasicMaterial map={texture_4} attachArray="material" />
      <meshBasicMaterial map={texture_5} attachArray="material" />
      <meshBasicMaterial map={texture_6} attachArray="material" />
    </mesh>
  )
}


  
function GameBoard3D({rolled,one,two,three,four,five,IsCurrentPlay}){
  
  function valueToRotation(value){
    switch(value) {
      case 1:
        return [0,-1.5,0,0];
        break;
      case 2:
        return [6,0,0,0];
        break;
      case 3:
        return [6.5,0,0,0];
        break;
      case 4:
        return [1,0,0,0];
        break;
      case 5:
        return [0,0,0,0];
        break;
      case 6:
        return [0,1,0,0];
        break;
      default:
        return [0,0,0,0]
    }
  }
  
    return(
        <Canvas  style={{width:'100vw',height:'60vw'}} linear="true" concurrent sRGB className="gameboard"  camera={{fov:60, position: [0, 0, 10] }}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, 0, -25]}>
                    <Plane  position={[0, 0, -10]}/>
                    <Plane  position={[-16, 0, -10]} rotation={[0, 0.9, 0]} />
                    <Plane  position={[16, 0, -10]} rotation={[0, -0.9, 0]} />
                    <Plane  position={[0, 11, -10]} rotation={[0.9, 0, 0]} />
                    <Plane  position={[0, -2, -10]} rotation={[-0.9, 0, 0]} />
                   {(IsCurrentPlay && rolled)&&
                   <React.Fragment>
                      <Cube name="one" position={[-7,-5,1]} rotation={valueToRotation(one.value)} />
                      <Cube name="two" position={[-3,-5,1]} rotation={valueToRotation(two.value)} />
                      <Cube name="three" position={[0,-5,1]} rotation={valueToRotation(three.value)}/>
                      <Cube name="four" position={[3,-5,1]} rotation={valueToRotation(four.value)}/>
                      <Cube name="five" position={[7,-5,1]} rotation={valueToRotation(five.value)}/>
                    </React.Fragment>}

                </Physics>
            </Suspense>
        </Canvas>) 
}
  
 export default GameBoard3D