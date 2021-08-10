<template>
  <div class="space-y-16">
    <article v-for="post in posts" :key="post.uuid">
      <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug} }" class="block">
        <h1 class="text-3xl sm:text-4xl leading-10 font-extrabold tracking-tight text-gray-900">{{ post.title }}</h1>
        <p class="mt-3 text-gray-500">{{ post.teaser }}</p>
      </NuxtLink>
    </article>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import usePosts from '@/composables/usePosts'

export default defineComponent({
  name: 'PostIndex',
  setup() {
    const { posts, fetchPosts } = usePosts()

    return { posts }
  }
})
</script>
