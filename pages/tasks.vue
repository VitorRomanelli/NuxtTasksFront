<template>
  <v-container>
    <Header
      title="Tarefas"
      description="Cadastre novas tarefas e analise detalhes das tarefas anteriores"
    />
    <NuxtChild />
  </v-container>
</template>

<script>
export default {
  name: 'TasksPage',

  middleware: 'auth',
}
</script>
