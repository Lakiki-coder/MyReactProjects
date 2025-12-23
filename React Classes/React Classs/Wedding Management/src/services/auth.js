import api from './api'

export const login = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password })
  return data // { user, token }
}

export const register = async (formData) => {
  const { data } = await api.post('/auth/register', formData)
  return data // { user, token }
}

export const validateToken = async (token) => {
  const { data } = await api.get('/auth/validate', {
    headers: { Authorization: `Bearer ${token}` }
  })
  return data // { user }
}