import { http, HttpResponse } from 'msw'

const API_BASE = '/api'

export const handlers = [
  // Auth
  http.post(`${API_BASE}/auth/login`, async ({ request }) => {
    const { email, password } = await request.json()
    return HttpResponse.json({
      user: { id: 1, email, role: 'couple' },
      token: 'mock-jwt-token'
    })
  }),

  http.post(`${API_BASE}/couple/registerCouple`, async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json({
      id: 1,
      coupleName: data.coupleName,
      coupleEmail: data.coupleEmail
    })
  }),

  http.post(`${API_BASE}/vendor/registerVendor`, async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json({
      vendorId: 1,
      vendorName: data.vendorName,
      contactInfo: data.contactInfo,
      vendorType: data.vendorType
    })
  }),

  http.post(`${API_BASE}/vendor/createProposal`, async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json({
      proposalId: 1,
      serviceDescription: data.serviceDescription,
      charge: data.charge,
      proposalStatus: 'pending',
      writtenDate: new Date().toISOString()
    })
  }),

  http.post(`${API_BASE}/wedding/createWedding`, async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json({
      weddingId: 1,
      weddingLocation: data.weddingLocation,
      weddingDate: data.weddingDate
    })
  }),

  http.get(`${API_BASE}/products`, () => {
    return HttpResponse.json([
      { id: 1, name: 'Venue A', price: 5000, image: '/venue-a.jpg' },
      { id: 2, name: 'Catering B', price: 3000, image: '/catering-b.jpg' }
    ])
  })
]