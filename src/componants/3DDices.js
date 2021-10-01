import React, { Suspense, useRef,useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntQuater() {
  return Math.random() * 2;

}


function Plane(props) {
    const [ref] = usePlane(() => ({ ...props }))
    return (
      <mesh ref={ref} >
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
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

const [ref,api] = useBox(() => ({ mass: 1, ...props}))
const doZeroVelocity = useRef(false)

useFrame(() => (!doZeroVelocity.current && api.velocity.set(0, 0, 0)))

window.setTimeout(function() {
  doZeroVelocity.current=true
  api.velocity.set(getRandomInt(-10,10), getRandomInt(-10,10), 0)
     }, props.time);
     
function handleClick(e) {
  api.velocity.set((e.movementX),-(e.movementY),0)
}

return (
    <mesh  pointer='grab' ref={ref}  onPointerOver={handleClick}>
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

function Cubes(){
    const array=[]
    for(var i=1; i<20;i++){
        array.push(<Cube  key={i} time={1000*i} rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomInt(-10,10), getRandomInt(-10,10),i*4+30]} />)
    }
    return array
}
  
function Dices(){

    return(
        <Canvas width="80%" linear="true" concurrent sRGB className="main"  camera={{fov:60, position: [0, 0, 10] }}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, 0, -25]}>
                    <Plane  position={[0, 0, -10]}/>
                    <Plane  position={[-16, 0, -10]} rotation={[0, 0.9, 0]} />
                    <Plane  position={[16, 0, -10]} rotation={[0, -0.9, 0]} />
                    <Plane  position={[0, 11, -10]} rotation={[0.9, 0, 0]} />
                    <Plane  position={[0, -2, -10]} rotation={[-0.9, 0, 0]} />
                    <Cubes />
                </Physics>
            </Suspense>
        </Canvas>) 
}
  
 export default Dices