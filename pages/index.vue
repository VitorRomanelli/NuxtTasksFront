<template>
  <v-container>
    <Header
      title="Perfil"
      description="Aproveite esse espaço para gerenciar seu perfil, modificar seus dados e conferir tarefas pendentes"
    />
    <v-row class="ma-0" dense>
      <v-col class="d-flex justify-center" cols="12" md="4">
        <div v-tilt>
          <v-card
            class="
              d-flex
              justify-center
              align-center
              flex-column
              primary-card-animation
              my-card
              pa-8
            "
          >
            <v-progress-circular
              :rotate="90"
              :size="245"
              :width="15"
              :value="value"
              color="rgba(32, 223, 127, 0.8)"
            >
              <v-img
                :src="require('~/static/example.jpg')"
                class="image"
                max-height="200"
                max-width="200"
              ></v-img>
            </v-progress-circular>

            <div class="my-content text-center">
              <span class="title-h4"> {{ user.username }} </span>
              <div class="xp-info">
                <span class="title-h3">{{ value }} </span>
                <span class="title-h4">/ 1000 </span>
                <span class="title-h4">XP </span>
              </div>
            </div>

            <div class="mt-6">
              <span class="title-h4">Informações:</span>

              <div class="mt-4">
                <div>
                  <span class="title-h6">Nome:</span>
                  <span class="paragraph-1"> {{ user.name }} </span>
                </div>
                <div>
                  <span class="title-h6">E-mail: </span>
                  <span class="paragraph-1"> {{ user.email }} </span>
                </div>
                <div>
                  <span class="title-h6">Cargo: </span>
                  <span class="paragraph-1"> {{ user.role }} </span>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="8" class="d-flex flex-column align-center">
        <v-form ref="form" style="max-width: 100%">
          <v-row class="ma-0" dense>
            <v-col cols="12">
              <span class="title-h4">Tarefas pendentes:</span>
            </v-col>
            <v-col cols="12">
              <div class="tasks">
                <v-card
                  v-for="i in 5"
                  :key="i"
                  style="min-width: 220px"
                  class="primary-card-animation ma-3 pa-5 d-flex"
                >
                  <v-icon class="mr-2" color="primarycontrast" x-large>
                    mdi-check-all
                  </v-icon>
                  <div>
                    <span class="title-h4">Título da tarefa</span>
                    <br />
                    <span class="paragraph-1">
                      Lorem ipsum dolor sit amet...
                    </span>
                    <div class="d-flex justify-end align-center">
                      <v-chip class="text-center" color="accent">
                        <span class="paragraph-1"> XP: </span>
                        <span class="label-bold ml-1 mt-1"> 50 </span>
                      </v-chip>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" class="pt-4">
              <span class="title-h4">Perfil:</span>
            </v-col>
            <v-col cols="12" sm="5">
              <span class="ml-1 label-bold"> Nome </span>
              <v-text-field
                v-model="user.name"
                background-color="secondary"
                :rules="[(v) => !!v || 'Nome obrigatório']"
                outlined
                class="primary-input"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <span class="ml-1 label-bold"> Nome de usuário </span>
              <v-text-field
                v-model="user.username"
                background-color="secondary"
                :rules="[(v) => !!v || 'Nome de usuário obrigatório']"
                outlined
                class="primary-input"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <span class="ml-1 label-bold"> Telefone </span>
              <v-text-field
                v-model="user.phoneNumber"
                v-mask="['(##) #####-####', '(##) ####-####']"
                background-color="secondary"
                outlined
                :rules="[(v) => !!v || 'Telefone obrigatório']"
                class="primary-input"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <span class="ml-1 label-bold"> E-mail </span>
              <v-text-field
                v-model="user.email"
                background-color="secondary"
                :rules="[
                  (v) => !!v || 'E-mail obrigatório',
                  (v) => /.+@.+\..+/.test(v) || 'E-mail inválido',
                ]"
                outlined
                class="primary-input"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <span class="ml-1 label-bold"> Cargo </span>
              <v-autocomplete
                v-model="user.role"
                append-icon="mdi-chevron-down"
                :items="roles"
                background-color="secondary"
                :rules="[(v) => !!v || 'Cargo obrigatório']"
                outlined
                class="primary-input"
              >
              </v-autocomplete>
            </v-col>
          </v-row>

          <div class="d-flex justify-end">
            <v-btn
              class="primary-button"
              height="45"
              :loading="$nuxt.$loading ? $nuxt.$loading.loading : false"
              @click="submit"
            >
              Salvar
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'IndexPage',
  components: { Header },

  layout: 'default',

  middleware: 'auth',

  data() {
    return {
      value: 0,
      user: {
        username: 'vromanelli',
        name: 'Vitor Romanelli',
        email: 'vromanelli@keener.io',
        role: 'Desenvolvedor',
        phoneNumber: '24988764216',
        xp: 28,
      },
      roles: ['Financeiro', 'Desenvolvedor', 'Gestão'],
    }
  },

  head: {
    title: 'Perfil',
  },

  mounted() {
    setTimeout(() => {
      this.value += this.user.xp
    }, 2000)
  },

  methods: {
    submit() {},
  },
}
</script>

<style scoped>
.tasks {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
}

.tasks::-webkit-scrollbar {
  background-color: var(--v-primary);
  height: 10px;
}

.tasks::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: rgba(114, 119, 131, 0.5);
  border-radius: 20px;
}

.image {
  border-radius: 50%;
}

.my-card .my-content .xp-info {
  display: none;
  opacity: 0;
  transform: translateY(15px);
  transition: all ease-in-out 0.5s;
}

.my-card:hover .my-content .xp-info {
  display: block;
  opacity: 1;
  transform: translateY(0px);
}
</style>
