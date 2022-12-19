import { stringToHex } from '#/utils'
import SerialPort from '#/utils/serial-port'

const serialPort = new SerialPort({ path: 'COM9' })
serialPort.addDataListener(data => {
  console.log(data, 'port data')
})

const data = Buffer.from('80010033B2', 'hex')
console.log(data, 'data')
serialPort.write(data)
