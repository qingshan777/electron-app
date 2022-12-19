<template>
  <div class="flex h-[300px] w-[400px] flex-col bg-white">
    <a-tabs v-model:activeKey="activeKey" type="card" class="flex-1">
      <a-tab-pane :key="PASSWORD_KEY" tab="密码认证">
        <PasswordAuth :activeKey="activeKey"></PasswordAuth>
      </a-tab-pane>
      <a-tab-pane :key="FINGER_KEY" tab="指纹认证"> </a-tab-pane>
      <a-tab-pane :key="CARD_KEY" tab="卡片认证">
        <CardAuth :activeKey="activeKey"></CardAuth>
      </a-tab-pane>
    </a-tabs>
    <div class="flex h-12 items-center justify-center">
      <a-button type="" block class="!w-[90%]" @click="closeLogin">关闭</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PasswordAuth from './PasswordAuth.vue'
import CardAuth from './CardAuth.vue'
import { PASSWORD_KEY, FINGER_KEY, CARD_KEY } from '@/config/auth'
import { useStore } from '@/store'

const { changeLoginVisible } = useStore()
const activeKey = ref('1')

const closeLogin = () => {
  changeLoginVisible(false)
}
</script>
