
 import * as CANNON from 'cannon'
 import * as THREE from "three";
 import React, { useRef, Suspense } from "react"
 import { Canvas, useLoader  } from '@react-three/fiber'
 import { PerspectiveCamera, PositionalAudio,TransformControls } from '@react-three/drei'
import { useCannon,Provider} from './useCanon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'

 function Plane({ position }) {
   // Register plane as a physics body with zero mass
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
 
 function Box({ position,rotation }) {
   // Register box as a physics body with mass
   const texture_1 = useLoader(TextureLoader, img);
   const texture_2 = useLoader(TextureLoader, dice6);
   const texture_3 = useLoader(TextureLoader, dice3);
   const texture_4 = useLoader(TextureLoader, dice4);
   const texture_5 = useLoader(TextureLoader, dice5);
   const texture_6 = useLoader(TextureLoader, dice2);
   
   const ref = useCannon({ mass: 100000}, body => {
     body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
     body.position.set(...position)
     body.quaternion.set(...rotation);
   
     
   })
 
   return (
     <mesh ref={ref} >
      
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
 function getRandomIntQuater() {
  return Math.random() * 2;
}
 function getRandomIntZ() {
  return Math.floor(Math.random() * 1000);
}
function getRandomIntX() {
  return Math.floor(Math.random() * 5);
}

function Dices() {
   

   return (
     <Canvas linear="true" className="main"  camera={{fov:60, position: [0, 0, 10] }}>
       <Provider>
          <Suspense fallback={null}>
         <Plane position={[0, 0, -10]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />
         <Box  rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomIntX(), getRandomIntX(),getRandomIntZ()]} />

         </Suspense>
       </Provider>
     </Canvas>
   )
 }
 export default Dices
 

 