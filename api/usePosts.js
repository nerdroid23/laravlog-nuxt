import { ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default function usePosts() {
  const { $axios } = useContext()
  const posts = ref([])

  const { fetch: fetchPosts } = useFetch(async () => {
    posts.value = (await $axios.$get('/posts')).data
  })

  return {
    posts,
    fetchPosts
  }
}
