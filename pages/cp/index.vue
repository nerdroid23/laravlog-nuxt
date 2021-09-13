<template>
  <div class="space-y-16">
    <button
      v-on:click="newPost"
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      New post
    </button>

    <!-- Each post -->
    <div class="space-y-3">
      <div
        v-for="post in posts"
        :key="post.uuid"
        class="flex items-baseline sm:justify-between flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 space-y-3 sm:space-y-0"
      >
        <p class="text-xl font-bold tracking-tight text-gray-900 truncate">
          {{ post.title }}
        </p>

        <div class="flex items-center space-x-6">
          <p class="text-base text-gray-500">
            <span
              :class="{ 'bg-green-100 text-green-800': post.published, 'bg-gray-100 text-gray-800': !post.published }"
              v-text="post.published ? 'Published' : 'Unpublished'"
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
            >
              Published
            </span>
          </p>
          <div>
            <NuxtLink :to="{ name: 'cp-posts-slug-edit', params: { slug: post.slug }}" class="text-sm font-medium">Edit</NuxtLink>
          </div>
          <div>
            <button class="text-sm font-medium">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
import useAdminPosts from '@/composables/useAdminPosts'

export default defineComponent({
  middleware: 'auth',
  setup() {
    const { posts, createPost } = useAdminPosts()
    const router = useRouter()

    const newPost = async () => {
      let post = await createPost()
      router.push({ name: 'cp-posts-uuid-edit', params: { uuid: post.uuid } })
    }

    return { posts, newPost }
  }
})
</script>
