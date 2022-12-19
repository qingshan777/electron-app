import * as ref from 'ref-napi'
import ArrayType from 'ref-array-di'
import StructType from 'ref-struct-di'

const CArray = ArrayType(ref)
const CStruct = StructType(ref)

// 设备数组的结构体类型
export const DeviceType = CStruct({
  vid: ref.types.ushort,
  pid: ref.types.ushort,
  szSerialNumber: CArray(ref.types.char, 64),
  bus_number: ref.types.uint32,
  device_address: ref.types.uint32,
  extraPtr: ref.types.uint
})

// 设备数组
export const DeviceArrayType = CArray(DeviceType)
// 设备句柄
export const DeviceHandler = CArray(ref.types.uint)
// 设备指针
export const DevicePointer = CArray(CArray(ref.types.uint))

export const SDK_FUNC = {
  sensorEnumDevices: ['int', [DeviceArrayType, 'int']], // 枚举设备
  sensorOpen: ['int', [ref.refType(DeviceType)]]
}
