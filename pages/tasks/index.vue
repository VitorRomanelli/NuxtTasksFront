<template>
  <div>
    <div style="width: 100%">
      <Header
        title="Tarefas"
        description="Cadastre novas tarefas e analise detalhes das tarefas anteriores"
      />
    </div>
    <div class="d-flex justify-end ma-4">
      <v-btn class="primary-button">
        Nova tarefa
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-row class="ma-0">
      <v-col>
        <div v-tilt>
          <v-card
            class="
              d-flex
              justify-center
              align-center
              flex-column
              primary-card
              my-card
              pa-8
            "
          >
            <div class="text-center mb-4">
              <span class="title-h4"> Total das tarefas </span>
              <br />
              <span class="title-h5">Cargo: </span>
              <span class="paragraph-1">Desenvolvedor</span>
            </div>

            <v-progress-circular
              :rotate="90"
              :size="145"
              :width="15"
              :value="value"
              color="rgba(32, 223, 127, 0.8)"
            >
              <span class="title-h3">{{ value }}</span>
            </v-progress-circular>

            <div>
              <div>
                <span class="title-h3"> {{ value }} </span>
                <span class="title-h4">/ 1000 </span>
                <span class="title-h4">XP </span>
              </div>
            </div>

            <div class="mt-6">
              <span class="title-h4">Informações:</span>

              <div class="mt-4">
                <div>
                  <span class="title-h6">Quantidade de tarefas:</span>
                  <span class="paragraph-1"> 8 </span>
                </div>
                <div>
                  <span class="title-h6">Quantidade de XP: </span>
                  <span class="paragraph-1"> 1000 </span>
                </div>
                <br />
                <div>
                  <span class="title-h6">Horas estimadas: </span>
                  <span class="paragraph-1"> 14h </span>
                </div>
                <div>
                  <span class="title-h6">Horas gastas: </span>
                  <span class="paragraph-1"> 14h </span>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>

      <v-col>
        <div v-tilt>
          <v-card
            class="
              d-flex
              justify-center
              align-center
              flex-column
              primary-card
              my-card
              pa-8
            "
          >
            <div class="text-center mb-4">
              <span class="title-h4"> Tarefas da semana </span>
            </div>

            <v-progress-circular
              :rotate="90"
              :size="125"
              :width="15"
              :value="value"
              color="rgba(32, 223, 127, 0.8)"
            >
              <span class="title-h3">{{ value }}</span>
            </v-progress-circular>

            <div class="my-content">
              <div class="xp-info">
                <span class="title-h3"> {{ value }} </span>
                <span class="title-h4">/ 1000 </span>
                <span class="title-h4">XP </span>
              </div>
            </div>
          </v-card>
        </div>

        <div v-tilt class="mt-2">
          <v-card
            class="
              d-flex
              justify-center
              align-center
              flex-column
              primary-card
              my-card
              pa-8
            "
          >
            <div class="text-center mb-4">
              <span class="title-h4"> Tarefas do mês </span>
            </div>

            <v-progress-circular
              :rotate="90"
              :size="125"
              :width="15"
              :value="value"
              color="rgba(32, 223, 127, 0.8)"
            >
              <span class="title-h3">{{ value }}</span>
            </v-progress-circular>

            <div class="my-content">
              <div class="xp-info">
                <span class="title-h3"> {{ value }} </span>
                <span class="title-h4">/ 1000 </span>
                <span class="title-h4">XP </span>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" lg="8">
        <v-card class="primary-card pa-4">
          <BarChart :data="chartdata" :options="options" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TasksPage',

  data() {
    return {
      value: 10,
      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20],
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [50, 30],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>

<style scoped>
.image {
  border-radius: 50%;
}

.my-card .my-content .xp-info {
  height: 0;
  opacity: 0;
  transform: translateY(15px);
  transition: all ease-in-out 0.5s;
}

.my-card:hover .my-content .xp-info {
  height: auto;
  opacity: 1;
  transform: translateY(0px);
}
</style>