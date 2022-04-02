<template>
  <div>
    <v-row justify="center" class="ma-0">
      <v-col md="4" sm="8" class="mx-auto">
        <AnimationOrc />
      </v-col>

      <v-col md="4" sm="8" class="mx-auto">
        <AnimationBike />
      </v-col>

      <v-col cols="12" class="mx-auto">
        <AnimationTasks />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AnimationsPage',

  data() {
    return {}
  },
}
</script>

