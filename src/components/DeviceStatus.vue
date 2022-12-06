<template>
  <div class="absolute bottom-0 left-0 flex h-10 w-full items-center justify-between bg-white px-4">
    <div class="">
      <a-button>柜内物品查询</a-button>
    </div>
    <div class="">
      <WifiOutlined class="text-lg text-blue-500" :class="[isOnline ? 'text-blue-500' : '']" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WifiOutlined } from '@ant-design/icons-vue'
import useNetwork from '@/hooks/useNetwork'

const { isOnline } = useNetwork()
</script>
