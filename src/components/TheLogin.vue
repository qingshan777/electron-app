<template>
  <div class="h-[400px] w-[500px] bg-white">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane :key="PASSWORD_KEY" tab="密码认证">
        <PasswordAuth :activeKey="activeKey"></PasswordAuth>
      </a-tab-pane>
      <a-tab-pane :key="FINGER_KEY" tab="指纹认证"> </a-tab-pane>
      <a-tab-pane :key="CARD_KEY" tab="卡片认证">
        <CardAuth :activeKey="activeKey"></CardAuth>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import PasswordAuth from './PasswordAuth.vue'
import CardAuth from './CardAuth.vue'
import { PASSWORD_KEY, FINGER_KEY, CARD_KEY } from '@/config/auth'
const activeKey = ref('1')
</script>
