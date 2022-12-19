<template>
  <div class="p-4">
    <a-form :model="formState" name="basic" autocomplete="off">
      <a-form-item name="username">
        <div class="flex flex-col">
          <img src="@/assets/images/login_card.png" alt="" class="h-[130px]" />
          <a-input class="flex-1" ref="cardNumberInput" v-model:value="formState.username" size="large" readonly />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { CARD_KEY } from '@/config/auth'
import useListenEnter from '@/hooks/useListenEnter'
import useLogin from '@/hooks/useLogin'

interface FormState {
  username: string
}

interface Props {
  activeKey: string
}

const props = withDefaults(defineProps<Props>(), {
  activeKey: ''
})

const isActive = computed(() => {
  return props.activeKey === CARD_KEY
})

const { onLogin } = useLogin()
const { addListenEnter, removeListenEnter } = useListenEnter()
// 监听当前登录方式的变化
watch(
  isActive,
  value => {
    if (value) {
      addListenEnter(onLogin)
      nextTick(() => {
        handleFocus()
      })
    } else {
      removeListenEnter()
    }
  },
  {
    immediate: true
  }
)

const formState = reactive<FormState>({
  username: ''
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

// 使输入框聚焦
const cardNumberInput = ref<null | HTMLInputElement>(null)
const handleFocus = () => {
  cardNumberInput.value?.focus()
}
</script>
