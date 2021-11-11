import { usePlane } from '@react-three/cannon'


function Plane(props) {
    const [ref] = usePlane(() => ({ ...props }))
    return (
      <mesh ref={ref} >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshBasicMaterial attach="material" color="#e9c46a" />
      </mesh>
    )
}

export default Plane