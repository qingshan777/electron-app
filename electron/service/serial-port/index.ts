import { SerialPort } from 'serialport'

/**
 * @description: 查询串口设备列表
 * @return {*}
 */
export const querySerialPortList = async () => {
  return await SerialPort.list()
}
/**
 * @description: 创建串口并自动打开
 * @param {string} path 设备地址
 * @param {number} baudRate 比特率，默认 9600
 * @return {*}
 */
export const openSerialPort = (path: string = '/dev/robot', baudRate = 9600) => {
  const port = new SerialPort({ path, baudRate })
  return port
}
