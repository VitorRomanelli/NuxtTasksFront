<template>
  <v-app
    :dark="$vuetify.theme.dark"
    style="background: var(--v-background-base)"
  >
    <v-main>
      <Nuxt />
    </v-main>

    <v-footer app padless>
      <v-btn
        style="bottom: 20px; left: 20px"
        absolute
        fab
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <transition mode="out-in">
        <div v-if="!$vuetify.theme.dark">
          <v-img :src="require('~/static/lightwave.svg')" class="image"></v-img>
        </div>

        <div v-else>
          <v-img :src="require('~/static/darkwave.svg')" class="image"></v-img>
        </div>
      </transition>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'ExternalLayout',
}
</script>

<style lang="scss" scoped>
.image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all ease-in-out 0.5s;
}

.image:hover {
  transform: scaleX(1.5);
}
</style>