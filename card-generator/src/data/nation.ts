import { api } from '@/lib/api'

export async function getNations(): Promise<string[]> {
  const response = await api.get('/nations')
  return response.data
}
