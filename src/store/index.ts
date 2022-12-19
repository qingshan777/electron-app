import { defineStore } from 'pinia'

interface State {
  networkIsOnline: boolean
  fingerIsOnline: boolean
  loginVisible: boolean
}

export const useStore = defineStore('main', {
  state: (): State => {
    return {
      networkIsOnline: false,
      fingerIsOnline: false,
      loginVisible: false
    }
  },
  getters: {},
  actions: {
    changeFingerIsOnline(state: boolean) {
      this.fingerIsOnline = state
    },
    changeNetworkIsOnline(state: boolean) {
      this.networkIsOnline = state
    },
    changeLoginVisible(visible: boolean) {
      this.loginVisible = visible
    }
  }
})
