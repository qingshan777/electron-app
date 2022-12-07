<template>
  <div class="relative flex h-full w-full items-center justify-center bg-blue-400">
    <div class="absolute top-4 right-10 text-white">{{ time }}</div>
    <h1 class="absolute top-20 left-1/2 -translate-x-1/2 text-3xl text-white">智能载体管控系统</h1>
    <TheLogin />
    <DeviceStatus />
  </div>
</template>

<script lang="ts" setup>
import TheLogin from './TheLogin.vue'
import DeviceStatus from './DeviceStatus.vue'
import useTime from '@/hooks/useTime'

const { time } = useTime('hh:mm:ss')
</script>
