<template>
  <div class="absolute bottom-0 left-0 flex h-10 w-full items-center justify-between bg-black bg-opacity-30 px-4">
    <div class="flex h-full items-center text-xl text-white">
      <span>柜门名称：1，</span>
      <span>文件总数：0，</span>
      <span>在位数量：0，</span>
      <span>错放数：0</span>
    </div>
    <div class="">
      <WifiOutlined class="text-xl" :class="[isOnline ? 'text-white' : '']" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WifiOutlined } from '@ant-design/icons-vue'
import useNetwork from '@/hooks/useNetwork'

const { isOnline } = useNetwork()
</script>
