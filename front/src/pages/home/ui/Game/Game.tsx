import type { JSX, ReactNode } from 'react'

import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'

import type { GameId } from '@/shared/config'
import { gameAtom, type Option } from '@/shared/model'
import { Transition } from '@/shared/ui'

import s from './Game.module.scss'

interface GameProps {
  className?: string
  games: Option<ReactNode, GameId>[]
}

export const Game = ({ className, games }: GameProps): JSX.Element => {
  const game = useAtomValue(gameAtom)

  return (
    <div className={clsx(s.game, className)}>
      {games.map(({ id, label, value }) => (
        <Transition
          key={id}
          className={s.game__overlay}
          isShow={game === label}
        >
          {value}
        </Transition>
      ))}
    </div>
  )
}
