import { ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default function usePosts(slug = null) {
  const { $axios } = useContext()
  const post = ref({})
  const posts = ref([])

  if (slug) {
    const { fetch: fetchPost } = useFetch(async () => {
      post.value = (await $axios.$get(`/posts/${slug}`)).data
    })

    return {
      post,
      fetchPost
    }
  }

  const { fetch: fetchPosts } = useFetch(async () => {
    posts.value = (await $axios.$get('/posts')).data
  })

  return {
    posts,
    fetchPosts
  }
}
