<template>
  <v-app
    :dark="$vuetify.theme.dark"
    style="background: var(--v-background-base)"
  >
    <v-app-bar app absolute height="100" elevation="0" color="primary">
      <div
        class="d-flex align-center justify-space-between"
        style="width: 100%"
      >
        <v-toolbar-title class="d-flex align-center title-h4">
          <v-img
            :src="require('~/static/task.png')"
            contain
            max-height="30"
            max-width="30"
          ></v-img>

          Task Experience
        </v-toolbar-title>

        <div class="d-flex justify-space-around">
          <v-tabs
            background-color="transparent"
            color="primarycontrast"
            slider-size="3"
          >
            <v-tab to="/"> Perfil </v-tab>
            <v-tab to="/tasks"> Tarefas </v-tab>
            <v-tab v-if="user.type == 0" to="/users"> Usuários </v-tab>
          </v-tabs>
        </div>

        <div>
          <v-btn text @click="logout">Sair</v-btn>

          <v-btn small fab @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon small>mdi-theme-light-dark</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {}
  },

  computed: {
    user() {
      return this.$store.state.auth.user !== null
        ? this.$store.state.auth.user
        : {}
    },
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')

      this.$router.push('/auth')
    },
  },
}
</script>
