<template></template>

<script>
import { useRouter } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    router.push('/getting-started/installation')
  },
})
</script>
