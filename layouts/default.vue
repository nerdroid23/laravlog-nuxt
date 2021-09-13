<template>
  <div class="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
    <div v-if="! isEditPage" class="hidden fixed top-0 right-0 px-6 py-4 sm:block space-x-2">
      <nuxt-link v-if="$auth.loggedIn && !isCp" :to="{ name: 'cp' }" class="text-sm text-gray-700">Control Panel</nuxt-link>

      <nuxt-link v-if="$auth.loggedIn && isCp" :to="{ name: 'cp' }" class="text-sm text-gray-700" exact>Dashboard</nuxt-link>

      <nuxt-link v-if="!isCp" :to="{ name: 'posts' }" class="text-sm text-gray-700">Posts</nuxt-link>

      <nuxt-link v-if="!$auth.loggedIn" :to="{ name: 'auth-login' }" class="text-sm text-gray-700">Login</nuxt-link>

      <a v-if="$auth.loggedIn" v-on:click.prevent="$auth.logout()" href="/auth/logout" class="text-sm text-gray-700">Logout</a>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'default',

  setup() {
    const route = useRoute()
    const isCp = computed(() => route.value.fullPath.includes('/cp'))
    const isEditPage = computed(() => route.value.name === 'cp-posts-uuid-edit')

    return { isCp, isEditPage }
  },
})
</script>
