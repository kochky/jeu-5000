
import * as CANNON from 'cannon'
import * as THREE from "three";
import React, { useState, Suspense,useRef } from "react"
import { Canvas, useLoader,useFrame  } from '@react-three/fiber'
import { PerspectiveCamera, PositionalAudio,OrbitControls,TransformControls } from '@react-three/drei'
import { useCannon,Provider} from './useCanon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'


function getRandomIntQuater() {
  return Math.random() * 2;

}

 function getRandomIntZ() {
  return Math.floor(Math.random() * 50+10);


}

function getRandomIntX() {
  return Math.floor(Math.random() * 5);

}

 function Plane({ position }) {
   const ref = useCannon({ mass: 0 }, body => {
     body.addShape(new CANNON.Plane())
     body.position.set(...position)

   })
   return (
     <mesh ref={ref} >
       <planeBufferGeometry attach="geometry" args={[10,10]} />
       <meshBasicMaterial attach="material" reflectivity="1" color="#e9c46a"/>
     </mesh>
   )
 }
 
 function Wall({ position,rotation }) {
  const ref = useCannon({ mass: 0 }, body => {
    body.addShape(new CANNON.Plane())
   body.quaternion.set(...rotation)
   body.position.set(...position)
 
  })
  return (
    <mesh ref={ref} >
      <planeBufferGeometry attach="geometry" args={[10,10]} />
      <meshBasicMaterial attach="material" reflectivity="1" color="#e9c46a"/>
    </mesh>
  )
 }


function Box({ position,rotation,time }) {
 
  const texture_1 = useLoader(TextureLoader, img);
  const texture_2 = useLoader(TextureLoader, dice6);
  const texture_3 = useLoader(TextureLoader, dice3);
  const texture_4 = useLoader(TextureLoader, dice4);
  const texture_5 = useLoader(TextureLoader, dice5);
  const texture_6 = useLoader(TextureLoader, dice2);

  const ref = useCannon({mass:100000}, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
    body.position.set(...position)
    body.quaternion.set(...rotation);
    body.mass = 0;
    window.setTimeout(function() {
      body.mass = 100000;
      body.updateMassProperties();
    }, time);
  })

  function handleClick(){
    console.log(ref.current)
    ref.current.position.z +=1
    ref.current.position.x +=1
    ref.current.position.y +=1

    console.log(ref.current.position.y)
    // if(ref.current.position.z < -8){console.log("arrivé")}
  }

  return  (
    <mesh ref={ref} onClick={handleClick} >
    <boxGeometry attach="geometry" args={[1, 1, 1]} />
    <meshBasicMaterial map={texture_1} attachArray="material"  />
    <meshBasicMaterial map={texture_2} attachArray="material" />
    <meshBasicMaterial map={texture_3} attachArray="material" />
    <meshBasicMaterial map={texture_4} attachArray="material" />
    <meshBasicMaterial map={texture_5} attachArray="material" />
    <meshBasicMaterial map={texture_6} attachArray="material" />
    </mesh>
  )
}

function Cube(){
  const array=[]
  for(var i=1; i<20;i++){
   array.push(<Box  key={i} time={2000*i} rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />)
  }
  return array
}

function Dices() {
   const a= useRef()
   return (
     <Canvas linear="true" className="main"  camera={{fov:60, position: [0, 0, 10] }}>
       
         <Provider>
          <Suspense fallback={null}>
          {/* <TransformControls ref={a}> */}
         <Plane position={[0, 0, -10]} />
     
         <Wall rotation={[0.7,0,0,1]} position={[0, 13, 0]} /> 
         <Wall rotation={[-0.7,0,0,1]} position={[0, -5, 0]} />
         <Wall rotation={[0,-0.7,0,1]} position={[20, 0, 0]} />
         <Wall rotation={[0,0.7,0,1]} position={[-25, 0, 0]} /> 
         <Cube />
         {/* </TransformControls>
      <OrbitControls ref={a} /> */}
         </Suspense>
       </Provider>
   
     </Canvas>
   )
 }
 export default Dices
 

 