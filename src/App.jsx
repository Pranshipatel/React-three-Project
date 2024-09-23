import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
   <Canvas>
    <OrbitControls />
    <mesh>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
   </Canvas>
  )
}

export default App
