export default {
    setUser(state, payload) {
        state.user = payload;
    },

    setToken(state, payload) {
        state.token = payload;
    },

    setValidTo(state, payload) {
        state.validTo = payload;
    },

    logout(state) {
        state.user = null;
        state.token = null;
        state.validTo = null;
    },
}