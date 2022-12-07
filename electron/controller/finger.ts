import ffi from 'ffi-napi'
import { resolve } from 'path'
import ref from 'ref-napi'
import ArrayType from 'ref-array-napi'
import StructType from 'ref-struct-napi'

const TXUSBDeviceType = StructType({
  vid: ref.types.short,
  pid: ref.types.short,
  szSerialNumber: ArrayType(ref.types.char, 64),
  bus_number: ref.types.int,
  device_address: ref.types.int,
  extraPtr: ref.types.uint
})

const TXUSBDeviceArrayType = ArrayType(TXUSBDeviceType)
const deviceList = new TXUSBDeviceArrayType(16)

console.log(deviceList, 'deviceList')

const SDK_PATH = resolve(__dirname, '../../lib/finger/linux/x86_64/libzkfpcap.so')
const fingerSDK = ffi.Library(SDK_PATH, {
  sensorEnumDevices: ['int', [TXUSBDeviceArrayType, 'int']],
  sensorRebootEx: ['int', ['int']]
})

const result = fingerSDK.sensorEnumDevices([], 16)
console.log(result, 'sensorEnumDevices')
