<script lang="ts" setup>
import { useTargetStore } from '@/stores/target'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const target_time = defineModel<Date>('target_time')
const upper_text = defineModel<string>('upper_text')
const under_text = defineModel<string>('under_text')

const target = useTargetStore()
const router = useRouter()
watchEffect(() => {
  target.$state.target_datetime = target_time?.value ?? new Date(8)
})
const onClick = () => {
  target.$state.target_datetime = target_time.value ?? new Date(8)
  target.$state.upper_text = upper_text.value ?? ''
  target.$state.under_text = under_text.value ?? ''
  router.push('/clock')
}
</script>

<template>
  <div class="home">
    <div id="introduce">
      <p>这是一个做倒计时（时间之差）的小工具，你可以指定目标时间和上下两段文字</p>
    </div>
    <div id="target">
      <el-date-picker
        v-model="target_time"
        type="datetime"
        placeholder="选一个目标时间"
        class="datetime"
      />
      <el-input v-model="upper_text" placeholder="上方文字" />
      <el-input v-model="under_text" placeholder="下方文字" />
      <el-button type="primary" @click="onClick">确认</el-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  gap: 5px;
  color: white;
  text-align: center;
}
.home #introduce {
  background-color: #3b4252;
  margin: 45px;
  padding: 10px;
  border-radius: 3px;
}

.home #target {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  gap: 5px;
  color: white;
  background-color: #3b4252;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 3px;
  padding: 5px;
}
.home #target .datetime {
  background-color: #4c566a;
}
</style>
