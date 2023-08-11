import getBic from './functions/getBic'
import startSchedule from './functions/startSchedule'
import { IDataForBD } from './types/types'
import sequelize from './db/db'
import updateBicInBD from './functions/updateBicInBD'
import dotenv from 'dotenv'

dotenv.config()

const mode = process.env.MODE || 'manually'

const getBicAndUpdateBD = async () => {
  await sequelize.authenticate()
  const url: string = 'http://www.cbr.ru/s/newbik'
  getBic(url)
    .then((data: IDataForBD[]) => {
      console.log(data)
      updateBicInBD(data)
    })
    .catch((err) => console.error(err))
}

if (mode === 'manually') {
  getBicAndUpdateBD()
} else if (mode === 'schedule') {
  startSchedule(getBicAndUpdateBD)
}
