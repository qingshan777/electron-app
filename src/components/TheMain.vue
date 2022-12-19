<template>
  <div class="relative flex h-full w-full items-center justify-center bg-[url('@/assets/images/bj.png')] bg-cover">
    <div class="absolute top-0 right-[4px] text-lg text-white">{{ time }}</div>
    <h1 class="absolute top-[190px] left-1/2 -translate-x-1/2 text-3xl text-white">智能载体管控系统</h1>
    <div
      v-show="!loginVisible"
      class="flex h-[95px] w-[135px] cursor-pointer select-none items-center justify-center bg-[url('@/assets/images/btn.png')] bg-cover bg-center bg-no-repeat text-xl text-white"
      @click="openLogin"
    >
      开始使用
    </div>
    <!-- 登录组件 -->
    <TheLogin v-show="loginVisible" />
    <!-- 设备状态 -->
    <DeviceStatus />
  </div>
</template>

<script lang="ts" setup>
import TheLogin from './TheLogin.vue'
import DeviceStatus from './DeviceStatus.vue'
import useTime from '@/hooks/useTime'
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'

const { time } = useTime('hh:mm:ss')

const store = useStore()
const { changeLoginVisible } = store
const { loginVisible } = storeToRefs(store)

const openLogin = () => {
  changeLoginVisible(true)
}
</script>
