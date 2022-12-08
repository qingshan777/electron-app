import { resolve } from 'path'
import ffi from 'ffi-napi'
import * as ref from 'ref-napi'
import ArrayType from 'ref-array-di'
import StructType from 'ref-struct-di'

const CArray = ArrayType(ref)
const CStruct = StructType(ref)

const TXUSBDeviceType = CStruct({
  vid: ref.types.ushort,
  pid: ref.types.ushort,
  szSerialNumber: CArray(ref.types.char, 64),
  bus_number: ref.types.uint32,
  device_address: ref.types.uint32,
  extraPtr: ref.types.uint
})

const TXUSBDeviceArrayType = CArray(TXUSBDeviceType)
const deviceList = new TXUSBDeviceArrayType(16)

console.log(deviceList.ref(), 'ref')

const SDK_PATH = resolve(__dirname, '../../lib/finger/linux/x86_64/libzkfpcap.so')
const fingerSDK = ffi.Library(SDK_PATH, {
  sensorEnumDevices: ['int', [TXUSBDeviceArrayType, 'int']]
})

const result = fingerSDK.sensorEnumDevices(deviceList, 1)
console.log(result, 'result')
