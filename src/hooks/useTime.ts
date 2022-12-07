import dayjs from 'dayjs'

export default function (format: string = 'YYYY-MM-DD hh:mm:ss') {
  const time = ref<string | null>(null)
  const timer = ref<number | null>(null)

  onMounted(() => {
    timer.value = window.setInterval(() => {
      time.value = dayjs().format(format)
    }, 1000)
  })

  onBeforeUnmount(() => {
    if (!timer.value) return
    clearTimeout(timer.value)
    timer.value = null
  })

  return {
    time
  }
}
