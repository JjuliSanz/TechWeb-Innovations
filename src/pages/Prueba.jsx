import { Canvas } from '@react-three/fiber'
import React from 'react'
import { EarthHologram } from '../models'

const Prueba = () => {
  return (
    <section className="w-full h-screen relative">
      <h1>HOLA</h1>
      <Canvas>
        <EarthHologram scale={10} />
      </Canvas>
    </section>
  )
}

export default Prueba