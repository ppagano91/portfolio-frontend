import { fetchAPI } from './api'

export async function sendContactMessage(data) {
  const response = await fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return response.message
}
