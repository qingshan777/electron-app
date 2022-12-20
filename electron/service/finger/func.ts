import * as ref from 'ref-napi'
import ArrayType from 'ref-array-di'
import StructType from 'ref-struct-di'

const CArray = ArrayType(ref)
const CStruct = StructType(ref)

// 设备数组的结构体类型
export const DeviceType = CStruct({
  vid: ref.types.ushort,
  pid: ref.types.ushort,
  szSerialNumber: CArray(ref.types.uchar, 64),
  bus_number: ref.types.uint32,
  device_address: ref.types.uint32,
  extraPtr: ref.types.uint
})

// 设备结构体数组
export const DeviceArrayType = CArray(DeviceType)
// 设备结构体指针
export const DeviceTypePointer = ref.refType(DeviceType)
// 设备句柄
export const DeviceHandler = ref.refType(CArray(ref.types.uint,8))
// 设备句柄指针
export const DeviceHandlerPtr = ref.refType(CArray(DeviceHandler,8))
// 返回raw图像数据(由调⽤者申请内存，不小于width*height字节)
export const ImageBuffer = ref.refType(ref.types.uchar)
// 内存⼤小
export const imageBufferSize = ref.types.uint

export const SDK_FUNC = {
  sensorEnumDevices: ['int', [DeviceArrayType, 'int']], // 枚举设备
  sensorOpen: [DeviceHandler, [DeviceTypePointer]], // 打开设备
  sensorClose: ['int', [DeviceHandler]], // 关闭设备
  sensorCapture: ['int', [DeviceHandler, ImageBuffer, imageBufferSize]], // 采集指纹
  sensorGetParameter: ['int', [DeviceHandler, 'int']] // 获取指纹仪简单参数
}
