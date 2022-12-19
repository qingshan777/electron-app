<template>
  <div class="absolute bottom-0 left-0 flex h-[50px] w-full items-center justify-between bg-black bg-opacity-30 px-4">
    <div class="flex h-full items-center text-lg text-white">
      <span>柜门名称：1，</span>
      <span>文件总数：0，</span>
      <span>在位数量：0，</span>
      <span>错放数：0</span>
    </div>
    <div class="">
      <img :src="isOnline ? NetworkNormalState : NetworkFailState" alt="网络连接状态" class="w-[40px] h-[40px] pointer-events-none select-none">
    </div>
  </div>
</template>

<script lang="ts" setup>
import useNetwork from '@/hooks/useNetwork'
import NetworkNormalState from '@/assets/images/state_network.png'
import NetworkFailState from '@/assets/images/state_network_bad.png'

const { isOnline } = useNetwork()
</script>
