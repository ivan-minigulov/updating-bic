const AdmZip = require('adm-zip')
const iconv = require('iconv-lite')
import { parseXml } from './parseXml'

export default function extractArchive(data: Buffer) {
  try {
    const zip = new AdmZip(data)
    const zipEntries = zip.getEntries()
    let dataForBD = []

    zipEntries.forEach((file: object) => {
      const xmlBuffer: Buffer = zip.readFile(file)
      const xml: string = iconv.decode(xmlBuffer, 'win1251')
      dataForBD = parseXml(xml, dataForBD)
    })
    return dataForBD
  } catch (e) {
    console.error('Error AdmZip: ', e)
  }
}
