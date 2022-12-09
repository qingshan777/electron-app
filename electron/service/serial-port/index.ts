import { stringToHex } from '#/utils'
import SerialPort from '#/utils/serial-port'

const serialPort = new SerialPort()
serialPort.addDataListener(data => {
  console.log(data, 'port data')
})

const str = stringToHex('8a0101119a')
// console.log(str,'str')
const hexNum = [0x8a, 0x01, 0x01, 0x11, 0x9a]
const data = Buffer.from(hexNum)
console.log(data, 'data')
serialPort.write(data)
