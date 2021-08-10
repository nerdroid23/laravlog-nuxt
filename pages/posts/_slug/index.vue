<template>
  <article>
    <h1 class="block text-center text-4xl sm:text-5xl leading-10 font-extrabold tracking-tight text-gray-900">
      {{ post.title }}
    </h1>
    <div class="mt-10 text-gray-700 prose prose-indigo prose-sm lg:prose" v-html="post.body"></div>
  </article>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import usePosts from '@/composables/usePosts'

export default defineComponent({
  name: 'PostShow',
  setup() {
    const route = useRoute()
    const slug = computed(() => route.value.params.slug)
    const { post, fetchPost } = usePosts(slug.value)

    return {
      post
    }
  }
})
</script>

<style scoped>

</style>
