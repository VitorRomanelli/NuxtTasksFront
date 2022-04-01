<template>
  <v-container
    class="fill-height flex-column d-flex justify-center align-center"
  >
    <h1 class="title-h1">Ops...</h1>
    <span class="paragraph-1 my-6">
      A rota que você está tentando acessar não foi encontrada
    </span>
    <v-btn class="primary-button mt-2" @click="$router.back()">
      Voltar ao sistema!
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'EmptyLayout',

  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {}
  },
}
</script>

<style scoped>
.title-h1 {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: var(--v-primarycontrast-base);
}

.paragraph-1 {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--v-primarycontrast-base);
}
</style>
