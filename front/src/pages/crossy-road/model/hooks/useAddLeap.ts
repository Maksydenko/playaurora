import { useAtomValue } from 'jotai'

import {
  Direction,
  GamepadButton,
  useGamepad,
  useSwipe,
  useWindowListener
} from '@/shared/model'

import { Tile } from '../../config'

import { checkCanLeapTo } from '../utils'

import { gameStateAtom } from '../atoms'

import type { PlayerState } from '../types'

const MAX_LEAPS_QUEUE = 2

/**
 * Queues a hop from the keyboard, the gamepad, or a swipe.
 *
 * @param playerState - Pose and the hops still waiting to play.
 */
export const useAddLeap = (playerState: PlayerState): void => {
  const gameState = useAtomValue(gameStateAtom)

  const getTarget = (state: PlayerState) => {
    let { x, y } = state.position

    const targets = {
      [Direction.Down]: () => {
        y -= Tile.Size
      },
      [Direction.Left]: () => {
        x -= Tile.Size
      },
      [Direction.Right]: () => {
        x += Tile.Size
      },
      [Direction.Up]: () => {
        y += Tile.Size
      }
    }

    for (const dir of state.leapsQueue) {
      targets[dir]?.()
    }

    return {
      x,
      y
    }
  }

  const addLeap = (dir: Direction) => {
    if (gameState.isEnded || playerState.leapsQueue.length >= MAX_LEAPS_QUEUE) {
      return
    }

    const { x, y } = getTarget(playerState)
    let [targetX, targetY] = [x, y]

    const targets = {
      [Direction.Down]: () => {
        targetY -= Tile.Size
      },
      [Direction.Left]: () => {
        targetX -= Tile.Size
      },
      [Direction.Right]: () => {
        targetX += Tile.Size
      },
      [Direction.Up]: () => {
        targetY += Tile.Size
      }
    }

    targets[dir]?.()

    if (!checkCanLeapTo(targetX, targetY)) {
      return
    }

    playerState.leapsQueue.push(dir)
  }

  const handleKeyDown = ({ code, repeat }: KeyboardEvent) => {
    if (repeat) {
      return
    }

    if (['ArrowLeft', 'KeyA'].includes(code)) {
      addLeap(Direction.Left)
    }

    if (['ArrowRight', 'KeyD'].includes(code)) {
      addLeap(Direction.Right)
    }

    if (['ArrowUp', 'KeyW', 'Space'].includes(code)) {
      addLeap(Direction.Up)
    }

    if (['ArrowDown', 'KeyS'].includes(code)) {
      addLeap(Direction.Down)
    }
  }

  useWindowListener({
    listener: handleKeyDown,
    type: 'keydown'
  })

  useSwipe(
    (dir: Direction) => {
      addLeap(dir)
    },
    () => {
      addLeap(Direction.Up)
    }
  )

  useGamepad({
    onButton: btn => {
      if (btn === GamepadButton.Left) {
        addLeap(Direction.Left)
      }

      if (btn === GamepadButton.Right) {
        addLeap(Direction.Right)
      }

      if (btn === GamepadButton.Cross || btn === GamepadButton.Up) {
        addLeap(Direction.Up)
      }

      if (btn === GamepadButton.Down) {
        addLeap(Direction.Down)
      }
    }
  })
}
