<template></template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup() {
    onMounted(() => {
      window.location.href = '/getting-started/installation'
    })
  },
})
</script>
