import { defineStore } from 'pinia'

const useTargetStore = defineStore('target', {
  state() {
    return {
      target_datetime: new Date(0),
      upper_text: '啊啊啊啊啊！',
      under_text: '啊啊啊啊啊啊！',
    }
  },
})

export { useTargetStore }
