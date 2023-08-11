import { Response } from 'node-fetch'

class HTTPResponseError extends Error {
  response: Response
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`)
    this.response = response
  }
}

export const checkStatus = (response: Response) => {
  if (response.ok) {
    return response
  } else {
    throw new HTTPResponseError(response)
  }
}
