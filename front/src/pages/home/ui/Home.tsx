import type { JSX } from 'react'

import CrossyRoad from '@/pages/crossy-road'
import Games from '@/pages/games'

import { GameId } from '@/shared/config'

import { Game } from './Game/Game'

import s from './Home.module.scss'

export const Home = (): JSX.Element => (
  <div className={s.home}>
    <div className={s.home__body}>
      <Games className={s.home__games} />
      <Game
        className={s.home__game}
        games={[
          {
            id: GameId.CrossyRoad,
            label: GameId.CrossyRoad,
            value: <CrossyRoad />
          }
        ]}
      />
    </div>
  </div>
)
