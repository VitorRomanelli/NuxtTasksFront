<template>
  <v-container class="d-flex justify-end align-center fill-height">
    <transition appear>
      <NuxtChild />
    </transition>
  </v-container>
</template>

<script>
export default {
  name: 'AuthPage',

  layout: 'external',
}
</script>
