import { type JSX, useEffect, useRef } from 'react'

import { useSetAtom } from 'jotai'
import type * as THREE from 'three'

import { OrthographicCamera } from '@react-three/drei'

import { Breakpoint } from '@/shared/config'

import { CameraPosition, CameraZoom } from '../config'

import { cameraAtom } from '../model'

export const Camera = (): JSX.Element => {
  const cameraRef = useRef<THREE.OrthographicCamera>(null)
  const setCamera = useSetAtom(cameraAtom)

  /**
   * Keeps the orthographic zoom aligned with the viewport width.
   *
   * @remarks Drops the shared camera atom when the camera unmounts.
   */
  useEffect(() => {
    const cameraElement = cameraRef.current
    setCamera(cameraElement)

    if (!cameraElement) {
      return
    }

    const updateZoom = () => {
      const width = window.innerWidth

      if (width < Breakpoint.Mobile) {
        cameraElement.zoom = CameraZoom.Mobile
      } else if (width < Breakpoint.Tablet) {
        cameraElement.zoom = CameraZoom.Tablet
      } else {
        cameraElement.zoom = CameraZoom.Desktop
      }

      cameraElement.updateProjectionMatrix()
    }

    updateZoom()
    window.addEventListener('resize', updateZoom)

    return () => {
      setCamera(null)
      window.removeEventListener('resize', updateZoom)
    }
  }, [setCamera])

  return (
    <OrthographicCamera
      ref={cameraRef}
      far={1000}
      near={0.1}
      position={[CameraPosition.X, CameraPosition.Y, CameraPosition.Z]}
      up={[0, 0, 1]}
      zoom={CameraZoom.Desktop}
      makeDefault
    />
  )
}
