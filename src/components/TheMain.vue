<template>
  <div class="relative flex h-full w-full items-center justify-center bg-blue-400">
    <div class="absolute top-10 left-10 text-white">{{ time }}</div>
    <TheLogin />
    <DeviceStatus />
  </div>
</template>

<script lang="ts" setup>
import TheLogin from './TheLogin.vue'
import DeviceStatus from './DeviceStatus.vue'
import useTime from '@/hooks/useTime'

const { time } = useTime()
</script>
