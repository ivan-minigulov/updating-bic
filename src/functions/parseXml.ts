const parseString = require('xml2js').parseString
import { IDataForBD } from '../types/types'

export function parseXml(xml: string, dataForBD: IDataForBD[]) {
  parseString(xml, function (err: Error, data: object) {
    try {
      if (err) console.log('Error invalid XML: ', err)
      const resultParse = Object.values(data)[0]
      resultParse['BICDirectoryEntry'].forEach((bicDirectoryEntry: object) => {
        if (bicDirectoryEntry['Accounts']) {
          bicDirectoryEntry['Accounts'].forEach((account: object) => {
            dataForBD.push({
              bic: Object.values(bicDirectoryEntry)[0]['BIC'],
              name: Object.values(bicDirectoryEntry['ParticipantInfo'][0])[0][
                'NameP'
              ],
              corrAccount: Object.values(account)[0]['Account'],
            })
          })
        }
      })
    } catch (e) {
      console.error('Error parse XML: ', e)
    }
  })
  return dataForBD
}
