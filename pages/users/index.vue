<template>
  <div>
    <v-simple-table class="my-table">
      <template #default>
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header"
              class="title-h3 text-center"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in users"
            :key="item.name"
            class="tr-body text-center"
          >
            <td class="title-h4">{{ item.name }}</td>
            <td class="paragraph-1">{{ item.email }}</td>
            <td class="paragraph-1">{{ item.xp }} XP</td>
            <td class="paragraph-1">{{ item.type }}</td>
            <td class="paragraph-1">
              <v-btn color="info" icon class="my-button mr-1">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
              <v-btn class="my-button" color="error" icon>
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',

  data() {
    return {
      headers: ['Nome', 'E-mail', 'XP', 'Tipo', 'Ações'],
      users: [
        { name: 'user', email: 'user@gmail.com', xp: 1000, type: 'admin' },
      ],
    }
  },
}
</script>


<style scoped>
.my-table {
  background: var(--v-primary-base) !important;
}

.tr-body {
  transition: 0.2s ease-in-out !important;
}

.tr-body :nth-child(1) {
  border-radius: 10px 0 0 10px !important;
}

.tr-body :nth-last-child(1) {
  border-radius: 0 10px 10px 0 !important;
}

.tr-body:hover {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2) !important;
  background: var(--v-primarycontrast-base) !important;
}

.tr-body:hover td {
  color: var(--v-primary-base) !important;
}

.my-button {
  transition: 0.4s !important;
}

.tr-body:hover .my-button .v-icon {
  transform: scale(1.2) !important;
}

.my-button:hover {
  animation: spin ease-in-out 0.6s;
}
</style>