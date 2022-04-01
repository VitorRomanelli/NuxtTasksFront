<template>
  <v-container>
    <transition appear>
      <NuxtChild />
    </transition>
  </v-container>
</template>

<script>
export default {
  name: 'TasksPage',

  middleware: 'auth',
}
</script>
