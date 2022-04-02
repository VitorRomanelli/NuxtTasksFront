<template>
  <div :style="$vuetify.breakpoint.mdAndUp ? 'margin-right: 200px' : ''">
    <div class="my-form">
      <h1 class="title-h1 ml1">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">Entrar</span>
          <span class="line line2"></span>
        </span>
      </h1>

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
          @keypress.enter="login"
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
          @keypress.enter="login"
        >
        </v-text-field>
      </v-form>

      <v-btn
        class="primary-button mt-4"
        height="45"
        block
        :loading="$nuxt.$loading ? $nuxt.$loading.loading : false"
        @click="login"
      >
        Entrar
      </v-btn>
      <!-- <v-btn class="mt-2" text style="text-transform: none" to="/auth/register">
      Não tem uma conta? Registre-se
    </v-btn> -->
    </div>
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

  mounted() {
    this.animate()
  },

  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('auth/login', this.user)
      }
    },

    animate() {
      const textWrapper = document.querySelector('.ml1 .letters')
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )
      this.$anime
        .timeline({})
        .add({
          targets: '.ml1 .letter',
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: 'easeOutExpo',
          duration: 600,
          delay: (el, i) => 70 * (i + 1),
        })
        .add({
          targets: '.ml1 .line',
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: 'easeOutExpo',
          duration: 700,
          offset: '-=875',
          delay: (el, i, l) => 80 * (l - i),
        })
    },
  },
}
</script>

<style scoped>
.ml1 .letter {
  display: inline-block;
  line-height: 1em;
}

.ml1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml1 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background: var(--v-primarycontrast-base);
  transform-origin: 0 0;
}

.ml1 .line1 {
  top: 0;
}
.ml1 .line2 {
  bottom: 0;
}
</style>
