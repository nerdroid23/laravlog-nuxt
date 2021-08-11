<template>
  <div>CP HOME</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth',
  setup() {}
})
</script>
