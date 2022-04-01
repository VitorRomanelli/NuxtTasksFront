export default function ({ $axios, $toast, store, redirect }) {
  $axios.onRequest((config) => {
    store._vm.$nextTick(() => {
      if (store._vm.$nuxt) {
        store._vm.$nuxt.$loading.start()
        return config
      }
    })
  })

  $axios.onResponse((response) => {
    store._vm.$nextTick(() => {
      if (store._vm.$nuxt) {
        store._vm.$nuxt.$loading.finish()
        return response
      }
    })
  })

  $axios.onError((error) => {
    store._vm.$nextTick(() => {
      if (store._vm.$nuxt) {
        store._vm.$nuxt.$loading.finish()
      }
    })

    const code = error.response.data.statusCode
    const message = error.response.data.message

    $toast.error(message + ' - ' + 'Código: ' + code)
  })
}
