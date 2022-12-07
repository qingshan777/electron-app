import ffi from 'ffi-napi'
import { resolve } from 'path'

const SDK_PATH = resolve(__dirname, '../../lib/windows/x64/libzkfp')
const fingerSDK = ffi.Library(SDK_PATH, {
  
})
console.log(SDK_PATH, 'SDK_PATH')
