<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  name: 'LoadingComponent',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0.7rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 8px solid rgb(34, 73, 87);
  border-radius: 50%;
  border-top-color: rgba(32, 223, 127, 0.8);
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
