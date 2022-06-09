<template>

</template>

<script>
import { useRouter } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router= useRouter()
    router.push(props.link)
  },
})
</script>
