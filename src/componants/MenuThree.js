import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from '@react-three/cannon'

import Cubes from './CubesThree'
import Plane from './PlaneThree'

  
function Dices(){
    return(
        <Canvas  style={{height:'40vh'}} linear="true" concurrent sRGB className="main"  camera={{fov:60, position: [0, 0, 10] }}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, 0, -25]}>
                    <Plane  position={[0, 0, -10]}/>
                    <Plane  position={[-16, 0, -10]} rotation={[0, 0.9, 0]} />
                    <Plane  position={[16, 0, -10]} rotation={[0, -0.9, 0]} />
                    <Plane  position={[0, 11, -10]} rotation={[0.9, 0, 0]} />
                    <Plane  position={[0, -8, -10]} rotation={[-0.9, 0, 0]} />
                    <Cubes />
                </Physics>
            </Suspense>
        </Canvas>) 
}
  
 export default Dices