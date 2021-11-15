import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
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
    <mesh ref={ref} onPointerOver={handleClick}>
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
    for(var i=1; i<40;i++){
        array.push(<Cube key={i} time={100*i} rotation={[getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater(),getRandomIntQuater()]} position={[getRandomInt(-10,10), getRandomInt(-10,10),i*4+10]} />)
    }
    return array
}

export default Cubes