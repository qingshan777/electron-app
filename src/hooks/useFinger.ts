import { ipcRenderer } from 'electron-better-ipc'
import { QUERY_INTERVAL } from '@/config/finger'
import { useStore } from '@/store'

export default function () {
  const store = useStore()
  const { changeFingerIsOnline } = store
  const timer = ref<number | null>(null)

  // 获取指纹仪连接状态
  const getFingerStatus = () => {
    ipcRenderer.send('get-finger-status')
  }

  // 注册监听器
  const initListener = () => {
    ipcRenderer.on('get-finger-status-response', (event, status: boolean) => {
      changeFingerIsOnline(status)
    })
  }

  onMounted(() => {
    initListener()
    getFingerStatus()
    timer.value = window.setInterval(getFingerStatus, QUERY_INTERVAL)
  })

  onBeforeMount(() => {
    if (timer.value) clearInterval(timer.value)
  })
}
