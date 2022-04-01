<template>
  <div class="my-12 text-center d-flex flex-column align-center">
    <span class="title-h3">{{ title }}</span>
    <div class="text-center" style="max-width: 600px">
      <span class="paragraph-1">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',

  props: {
    title: { type: String, default: 'Title' },
    description: { type: String, default: 'Description' },
  },
}
</script>

<style scoped>
</style>