import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';


const Scene = () => {
    let tex = useTexture("./images.png");
    let scene = useRef(null);
    useFrame((state,delta)=>{
        scene.current.rotation.y += delta;
    })
  return (
    <group rotation={[0,1.4,0.5]}>
    <mesh ref={scene} >
    <cylinderGeometry args={[1, 1, 1, 30, 60, true]}/>
    <meshStandardMaterial map={tex} transparent  side={THREE.DoubleSide} />
  </mesh>
  </group>
  )
}

export default Scene
