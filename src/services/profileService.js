import { fetchAPI } from './api'

export async function getProfile() {
  const response = await fetchAPI('/profile')
  return response.data
}
