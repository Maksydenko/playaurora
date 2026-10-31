import type { JSX } from 'react'

import { WheelSize } from '../config'

import { wheelGeometry, wheelMaterial } from '../lib'

interface WheelProps {
  position: [number, number]
}

export const Wheel = ({ position }: WheelProps): JSX.Element => (
  <mesh
    geometry={wheelGeometry}
    material={wheelMaterial}
    position={[...position, WheelSize.Z / 2]}
    castShadow
    receiveShadow
  />
)
