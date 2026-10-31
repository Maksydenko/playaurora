import { useEffect, useRef } from 'react'

import { Direction } from '../enums'

interface UseGamepadOptions {
  onButton?: (buttonIndex: number) => void
  onStick?: (direction: Direction) => void
}

const DEAD_ZONE = 0.3

/**
 * Reports newly pressed gamepad buttons and stick directions.
 *
 * @param options - Handlers for a button press and a stick flick.
 */
export const useGamepad = ({ onButton, onStick }: UseGamepadOptions): void => {
  const prevPressed = useRef<boolean[]>([])
  const prevStick = useRef({
    x: 0,
    y: 0
  })
  const onButtonRef = useRef(onButton)
  const onStickRef = useRef(onStick)

  onButtonRef.current = onButton
  onStickRef.current = onStick

  /**
   * Polls the first connected gamepad until the hook unmounts.
   */
  useEffect(() => {
    let animationId: number

    const checkGamepad = () => {
      const gamepads = navigator.getGamepads()
      const [gamepad] = gamepads

      if (gamepad) {
        // Buttons
        gamepad.buttons.forEach((btn, i) => {
          const wasPressed = prevPressed.current[i] || false

          if (btn.pressed && !wasPressed) {
            onButtonRef.current?.(i)
          }

          prevPressed.current[i] = btn.pressed
        })

        // Axes
        const [x, y] = gamepad.axes

        // X
        if (x > DEAD_ZONE && prevStick.current.x <= DEAD_ZONE) {
          onStickRef.current?.(Direction.Right)
        }

        if (x < -DEAD_ZONE && prevStick.current.x >= -DEAD_ZONE) {
          onStickRef.current?.(Direction.Left)
        }

        // Y
        if (y > DEAD_ZONE && prevStick.current.y <= DEAD_ZONE) {
          onStickRef.current?.(Direction.Down)
        }

        if (y < -DEAD_ZONE && prevStick.current.y >= -DEAD_ZONE) {
          onStickRef.current?.(Direction.Up)
        }

        prevStick.current = {
          x,
          y
        }
      }

      animationId = requestAnimationFrame(checkGamepad)
    }

    const handleGamepadConnected = () => {
      checkGamepad()
    }

    const handleGamepadDisconnected = () => {
      cancelAnimationFrame(animationId)
    }

    if (navigator.getGamepads().some(gamepad => gamepad)) {
      checkGamepad()
    }

    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)

    return () => {
      handleGamepadDisconnected()
      window.removeEventListener('gamepadconnected', handleGamepadConnected)
      window.removeEventListener(
        'gamepaddisconnected',
        handleGamepadDisconnected
      )
    }
  }, [])
}
