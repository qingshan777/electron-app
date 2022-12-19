import { defineStore } from 'pinia'

interface State {
  loginVisible: boolean
}

export const useStore = defineStore('main', {
  state: (): State => {
    return {
      loginVisible: false
    }
  },
  getters: {},
  actions: {
    changeLoginVisible(visible: boolean) {
      this.loginVisible = visible
    }
  }
})
