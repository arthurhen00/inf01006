import { api } from '@/lib/api'

export async function getPositions(): Promise<string[]> {
  const response = await api.get('/positions')
  return response.data
}
