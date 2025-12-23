import axios from 'axios'

const API_BASE = '/api'

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Couple APIs
export const coupleAPI = {
  register: (data) => api.post('/couple/registerCouple', data),
  responseToProposal: (proposalId, status) => api.get(`/couple/responseToProposal?proposalId=${proposalId}&status=${status}`),
  signContract: (contractId) => api.patch(`/couple/signContract`, { contractId }),
  removeGuest: (guestId) => api.delete(`/couple/removeGuest?guestId=${guestId}`),
  addGuest: (weddingId, guestData) => api.post(`/couple/addGuest`, { weddingId, ...guestData })
}

// Vendor APIs
export const vendorAPI = {
  register: (data) => api.post('/vendor/registerVendor', data),
  createProposal: (data) => api.post('/vendor/createProposal', data),
  createContract: (data) => api.post('/vendor/createContract', data)
}

// Wedding APIs
export const weddingAPI = {
  create: (data) => api.post('/wedding/createWedding', data),
  getList: (coupleId) => api.get(`/wedding/weddingList/${coupleId}`),
  addVendor: (coupleId, vendorId) => api.put(`/wedding/couple/vendors/${coupleId}/${vendorId}`, {})
}

// Products APIs
export const productsAPI = {
  getAll: () => api.get('/products'),
  create: (data) => api.post('/products', data)
}

// Wedding Images
export const imagesAPI = {
  getWeddingImages: () => api.get('/weddingImages')
}

export default api