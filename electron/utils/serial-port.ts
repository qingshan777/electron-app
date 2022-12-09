import { SerialPort as SerialPortLib } from 'serialport'

export default class SerialPort {
  private portInstance: null | SerialPortLib = null

  constructor(path: string = '/dev/ttyUSB0', baudRate: number = 9600) {
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
  addDataListener(cb){
    // this.portInstance.on('data',cb)
    this.portInstance.on('data', function (data) {
      console.log('Data:', data)
    })
  }

  // 关闭串口
  close() {
    if (!this.portInstance) return
    this.portInstance.close()
  }
}
