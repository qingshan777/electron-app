import { ipcMain } from 'electron-better-ipc'
import { queryDeviceOnline, openDevice, closeDevice, getParameter } from '#/service/finger'

// 获取指纹设备是否在线
// ipcMain.on('get-finger-status', async event => {
//   const isOnline = queryDeviceOnline()
//   event.sender.send('get-finger-status-response', isOnline)
// })

queryDeviceOnline()
openDevice()
// closeDevice()
getParameter()