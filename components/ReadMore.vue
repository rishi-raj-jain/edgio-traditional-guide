<template>
  <Alert icon="👉"> Read more in <Link :to="link" v-text="title" />. </Alert>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
