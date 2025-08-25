<template>
  <div class="clock">
    <h1>{{ target.upper_text }}</h1>
    <br />
    <h1>{{ day }}天 {{ hour }}小时 {{ min }}分 {{ sec }}秒 {{ ms }}毫秒</h1>
    <br />
    <h1>{{ target.under_text }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useTargetStore } from '@/stores/target'
import { ref } from 'vue'

const target = useTargetStore()
// const (day,hour,min,sec)=(ref(),ref(),ref(),ref())
const day = ref()
const hour = ref()
const min = ref()
const sec = ref()
const ms = ref()
const msPerDay = 24 * 60 * 60 * 1000
const msPerHour = 60 * 60 * 1000
const msPerMin = 60 * 1000
const msPerSec = 1000

setInterval(() => {
  const left = Math.abs(target.$state.target_datetime.getTime() - Date.now())
  day.value = Math.floor(left / msPerDay)
  hour.value = Math.floor((left % msPerDay) / msPerHour)
  min.value = Math.floor((left % msPerHour) / msPerMin)
  sec.value = Math.floor((left % msPerMin) / msPerSec)
  ms.value = Math.floor(left % msPerSec)
}, 1)
</script>

<style lang="css" scoped>
.clock {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  gap: 5px;
}
</style>
