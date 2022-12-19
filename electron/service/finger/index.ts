import { resolve } from 'path'
import * as ref from 'ref-napi'
import ffi from 'ffi-napi'
import { SDK_FUNC, DeviceArrayType, DeviceType, DeviceHandler, DevicePointer } from './func'

// C++ SDK 文件地址
const SDK_PATH = resolve(__dirname, '../../lib/finger/linux/x86_64/libzkfpcap.so')
// 通过 ffi 解析 C++ SDK 方法
const fingerSDK = ffi.Library(SDK_PATH, SDK_FUNC)

// 最大连接数
const MAX_DEVICE_NUM = 16
// 指纹仪设备数组
const deviceList = new DeviceArrayType(MAX_DEVICE_NUM)
// 当前指纹仪在线状态
let isOnline = false
// 当前接入的指纹仪设备
let currentDevice = null

/**
 * @description: 查询当前设备在线情况
 * @return {*}
 */
export const queryDeviceOnline = () => {
  isOnline = fingerSDK.sensorEnumDevices(deviceList, MAX_DEVICE_NUM) > 0
  return isOnline
}

/**
 * @description: 打开指纹仪设备
 * @return {*}
 */
export const openDevice = () => {
  if (!isOnline) return
  
  currentDevice = fingerSDK.sensorOpen(deviceList[0].ref())

  console.log(deviceList[0].ref(),'deviceList[0].ref()')
  console.log(currentDevice,'currentDevice')
}
