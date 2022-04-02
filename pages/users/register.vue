<template>
  <div class="d-flex flex-column justify-center align-center fill-height">
    <div style="max-width: 800px">
      <v-form ref="form">
        <v-row class="ma-0" dense>
          <v-col cols="7" sm="4">
            <v-text-field
              v-model="user.username"
              background-color="secondary"
              placeholder="Nome de usuário"
              :rules="[(v) => !!v || 'Nome de usuário obrigatório']"
              outlined
              class="primary-input"
            >
            </v-text-field>
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              v-model="user.phoneNumber"
              v-mask="['(##) #####-####', '(##) ####-####']"
              background-color="secondary"
              placeholder="Telefone"
              outlined
              :rules="[(v) => !!v || 'Telefone obrigatório']"
              class="primary-input"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field
              v-model="user.email"
              background-color="secondary"
              placeholder="E-mail"
              :rules="[
                (v) => !!v || 'E-mail obrigatório',
                (v) => /.+@.+\..+/.test(v) || 'E-mail inválido',
              ]"
              outlined
              class="primary-input"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="user.password"
              name="password"
              autocomplete="on"
              background-color="secondary"
              placeholder="Senha"
              outlined
              :type="!show ? 'password' : ''"
              :append-icon="!show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              :rules="[(v) => !!v || 'Senha obrigatória']"
              class="primary-input"
              @click:append="show = !show"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              name="password"
              autocomplete="on"
              background-color="secondary"
              placeholder="Confirme a senha"
              outlined
              :type="!show2 ? 'password' : ''"
              :append-icon="!show2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              :rules="[(v) => v == user.password || 'Senhas diferentes']"
              class="primary-input"
              @click:append="show2 = !show2"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>

    <div class="d-flex justify-end mt-4">
      <v-btn
        class="primary-button-outline mr-4"
        height="45"
        to="/auth"
        :disabled="$nuxt.$loading ? $nuxt.$loading.loading : false"
      >
        Voltar
      </v-btn>
      <v-btn
        class="primary-button"
        height="45"
        :loading="$nuxt.$loading ? $nuxt.$loading.loading : false"
        @click="submit"
      >
        Registrar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',

  data() {
    return {
      show: false,
      show2: false,
      user: {},
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios
          .$post('/user', this.user)
          .then((res) => {
            this.$toast.success('Seu cadastro foi efetuado com sucesso!')
            this.$router.push('/auth')
          })
          .catch(() => {})
      }
    },
  },
}
</script>
