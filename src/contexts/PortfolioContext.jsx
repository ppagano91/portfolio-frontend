import React, { createContext, useContext, useEffect, useState } from 'react'
import { PORTFOLIO_CONFIG } from '../config/constants'
import { getProfile, mapProfileToPersonal } from '../services/profileService'

const PortfolioContext = createContext({
  profile: null,
  personal: PORTFOLIO_CONFIG.personal,
  loading: true,
  error: null,
})

export function PortfolioProvider({ children }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const data = await getProfile()
        if (!cancelled) {
          setProfile(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const personal = mapProfileToPersonal(profile)

  return (
    <PortfolioContext.Provider value={{ profile, personal, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  return useContext(PortfolioContext)
}
