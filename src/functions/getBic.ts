const fetch = require('node-fetch')
import { Response } from 'node-fetch'
import extractArchive from './extractArchive'
import { IDataForBD } from '../types/types'
import { checkStatus } from '../middleware/errorNodeFetch'

export default async function getBic(url: string) {
  try {
    const response: Response = await fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/zip' },
    })
    checkStatus(response)
    const data: Buffer = await response.buffer()
    const dataFromBD: IDataForBD[] = extractArchive(data)
    return dataFromBD
  } catch (error) {
    console.error('Error fetch:', error)
  }
}
