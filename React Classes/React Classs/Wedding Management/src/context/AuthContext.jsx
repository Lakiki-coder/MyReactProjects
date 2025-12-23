import { createContext, useContext, useState, useEffect } from 'react'
import * as authService from '../services/auth'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      // Validate token & fetch user
      const validateToken = async () => {
        try {
          const userData = await authService.validateToken(token)
          setUser(userData)
        } catch {
          localStorage.removeItem('token')
          setToken(null)
        } finally {
          setLoading(false)
        }
      }
      validateToken()
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (email, password) => {
    const { user: userData, token: newToken } = await authService.login(email, password)
    setUser(userData)
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
  }

  const register = async (formData) => {
    const { user: userData, token: newToken } = await authService.register(formData)
    setUser(userData)
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  return (
    <AuthContext.Provider value={{ user, loading, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)