import { type JSX, useEffect } from 'react'

import clsx from 'clsx'
import { useAtom } from 'jotai'

import { getPropertyValue, Time } from '@/shared/model'
import { Transition } from '@/shared/ui'

import { gameStateAtom } from '../../model'

import { Loader } from '../Loader/Loader'

import s from './Loading.module.scss'

interface LoadingProps {
  className?: string
}

export const Loading = ({ className }: LoadingProps): JSX.Element => {
  const [{ isLoading }, setGameState] = useAtom(gameStateAtom)
  const loaderTime = getPropertyValue('--crossy-road-loader-time')

  useEffect(() => {
    if (!isLoading) {
      return
    }

    const timeout = setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        isLoading: false
      }))
    }, loaderTime * Time.MillisecondsInSecond)

    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading, loaderTime, setGameState])

  return (
    <Transition className={clsx(s.loading, className)} isShow={isLoading}>
      <Loader />
    </Transition>
  )
}
