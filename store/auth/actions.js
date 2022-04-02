export default {
    async login ({ commit, dispatch }, { username, password }) {
        // make an API call to login the user with an email address and password
        await this.$axios.post(
          'auth/sign', 
          { username, password }
        ).then((response) => {
          const user = response.data.content.user
          const token = response.data.content.token
          const validTo = response.data.content.validTo
  
          // commit the user and tokens to the state
          commit('setUser', user);
          commit('setToken', token);
          commit('setValidTo', validTo);

          this.$router.push('/')
        }).catch(() => {})
      },

      logout ({ commit, state }) {
        commit('logout')
      },
}