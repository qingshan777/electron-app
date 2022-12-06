export default function () {
  const addListenEnter = (callback: Function | null) => {
    if (callback === null) {
      throw new Error('应提供一个回调函数')
    }
    
    document.onkeydown = (event: KeyboardEvent) => {
      if (event.code !== 'Enter') return
      callback()
    }
  }

  const removeListenEnter = () => {
    document.onkeydown = null
  }

  return {
    addListenEnter,
    removeListenEnter
  }
}
