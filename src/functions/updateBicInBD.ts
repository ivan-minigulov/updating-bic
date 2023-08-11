import { IDataForBD } from '../types/types'
import { Bic } from '../model/bicModel'

export default async function updateBicInBD(data: IDataForBD[]) {
  try {
    await Bic.sync({ force: true })
    data.forEach(async (account) => {
      await Bic.create({ ...account })
    })
  } catch (e) {
    console.error('Error updateBicInBD: ', e)
  }
}
