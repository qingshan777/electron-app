import { SerialPort as SerialPortLib } from 'serialport'
import { ByteLengthParser } from '@serialport/parser-byte-length'

export default class SerialPort {
  private portInstance: null | SerialPortLib = null

  constructor({ path, baudRate = 9600 }: { path: string; baudRate?: number }) {
    this.init(path, baudRate)
  }

  private init(path: string, baudRate: number) {
    if (this.portInstance) return
    this.portInstance = new SerialPortLib({ path, baudRate }, err => {
      if (err) console.log(`串口打开失败,${err}`)
    })
  }

  // 查询串口列表
  queryPortList() {
    return SerialPortLib.list()
  }

  // 写入数据
  write(data) {
    if (!this.portInstance) return
    this.portInstance.write(data)
  }

  // 添加数据返回的监听器
  addDataListener(cb) {
    const parser = this.portInstance.pipe(new ByteLengthParser({ length: 6 })) // 每收到6个字节触发
    parser.on('data', data => {
      console.log('Read Data:', data)
    })

    // this.portInstance.on('readable', () => {
    //   console.log('Data:', this.portInstance.read())
    // })
  }

  // 关闭串口
  close() {
    if (!this.portInstance) return
    this.portInstance.close()
  }
}
