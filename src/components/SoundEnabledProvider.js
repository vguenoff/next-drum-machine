'use client'
import { createContext, useState } from 'react'

export const SoundEnabledContext = createContext()

export default function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <SoundEnabledContext.Provider value={[soundEnabled, setSoundEnabled]}>
      {children}
    </SoundEnabledContext.Provider>
  )
}
