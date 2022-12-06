<template>
  <div class="p-4">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <div class="flex items-center justify-center">
        <a-button type="primary" html-type="submit">提交</a-button>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import useLogin from '@/hooks/useLogin'

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
})

const { onLogin } = useLogin()
const onFinish = (values: any) => {
  console.log('Success:', values)

  onLogin()
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
