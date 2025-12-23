import { useQuery } from '@tanstack/react-query'
import { productsAPI } from '../services/api'

export const useVendors = () => {
  return useQuery({
    queryKey: ['vendors'],
    queryFn: () => productsAPI.getAll(),
    staleTime: 5 * 60 * 1000 // 5 min cache
  })
}