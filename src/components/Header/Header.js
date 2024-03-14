'use client'
// import { useId, useState } from 'react'
import { Volume2, VolumeX } from 'react-feather'
import { useContext } from 'react'

import VisuallyHidden from '../VisuallyHidden'
import MaxWidthWrapper from '../MaxWidthWrapper'
import styles from './Header.module.css'

import { SoundEnabledContext } from '../SoundEnabledProvider'

export default function Header() {
  // const id = useId()
  const [soundEnabled, setSoundEnabled] = useContext(SoundEnabledContext)

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>
        <button onClick={() => setSoundEnabled(!soundEnabled)}>
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  )
}
