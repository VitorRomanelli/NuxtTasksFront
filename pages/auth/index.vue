<template>
  <div>
    <h1 class="title-h1">Entrar</h1>

    <br />

    <p class="paragraph-1 mt-4">
      Faça login e comece a gerenciar suas tarefas e funcionários
    </p>

    <br />

    <v-form ref="form">
      <v-text-field
        v-model="user.username"
        background-color="secondary"
        placeholder="Usuário"
        outlined
        class="primary-input"
        :rules="[(v) => !!v || 'Usuário obrigatório']"
        @keypress.enter="submit"
      >
      </v-text-field>
      <v-text-field
        v-model="user.password"
        name="password"
        background-color="secondary"
        autocomplete="on"
        placeholder="Senha"
        outlined
        class="primary-input"
        :type="!show ? 'password' : ''"
        :append-icon="!show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        :rules="[(v) => !!v || 'Senha obrigatória']"
        @click:append="show = !show"
        @keypress.enter="submit"
      >
      </v-text-field>
    </v-form>

    <v-btn
      class="primary-button mt-4"
      height="45"
      block
      :loading="$nuxt.$loading ? $nuxt.$loading.loading : false"
      @click="submit"
    >
      Entrar
    </v-btn>
    <!-- <v-btn class="mt-2" text style="text-transform: none" to="/auth/register">
      Não tem uma conta? Registre-se
    </v-btn> -->
  </div>
</template>

<script>
export default {
  name: 'AuthPage',

  data() {
    return {
      show: false,
      user: {},
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios
          .$post('/auth/sign', this.user)
          .then((res) => {
            const user = res.content.user
            const token = res.content.token
            const validTo = res.content.validTo

            this.$store.commit('user/setUser', user)
            this.$store.commit('user/setToken', token)
            this.$store.commit('user/setValidTo', validTo)

            this.$router.push('/')
          })
          .catch(() => {})
      }
    },
  },
}
</script>
