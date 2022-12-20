import { resolve } from 'path'
import ffi from 'ffi-napi'
import * as ref from 'ref-napi'
import { SDK_FUNC, DeviceArrayType, DeviceType } from './func'

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
// 当前接入的指纹仪设备句柄
let deviceHandle = null

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
  // deviceHandle = handle
  // for (const i in handle) {
  //   console.log(handle[i],i)
  // }
  // console.log(deviceList[0].szSerialNumber, 'szSerialNumber')
  // console.log(deviceList[0].szSerialNumber[1], 'szSerialNumber')
  // console.log(deviceList[0].szSerialNumber[2], 'szSerialNumber')
  // console.log(deviceList[1].szSerialNumber, 'deviceList')
  deviceList[0].szSerialNumber[0] = 3
  deviceList[0].szSerialNumber[1] = 8
  deviceList[0].szSerialNumber[2] = 3
  deviceList[0].szSerialNumber[3] = 2
  deviceList[0].szSerialNumber[4] = 1
  deviceList[0].szSerialNumber[5] = 9
  deviceList[0].szSerialNumber[6] = 4
  deviceList[0].szSerialNumber[7] = 8
  deviceList[0].szSerialNumber[8] = 6
  deviceList[0].szSerialNumber[9] = 2
  deviceList[0].szSerialNumber[10] = 2
  deviceList[0].szSerialNumber[11] = 7
  deviceList[0].szSerialNumber[12] = 0

  const handle = fingerSDK.sensorOpen(deviceList[0].ref())
  // for (const key in deviceList[0].szSerialNumber) {
  //   console.log(deviceList[0].szSerialNumber[key],key)
  // }
  console.log(handle, 'handle')
}

/**
 * @description: 关闭指纹仪设备
 * @return {*}
 */
export const closeDevice = () => {
  if (!isOnline || deviceHandle === null) return
  const result = fingerSDK.sensorClose(deviceHandle)
  console.log(result, 'result')
}

/**
 * @description: 获取指纹仪宽高
 * @return {*}
 */
export const getParameter = () => {
  if (!isOnline || deviceHandle === null) return
  const width = fingerSDK.sensorGetParameter(deviceHandle, 1)
  const height = fingerSDK.sensorGetParameter(deviceHandle, 2)
  console.log(width, 'width')
  console.log(height, 'height')
}
