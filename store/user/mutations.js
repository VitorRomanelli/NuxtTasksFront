export default {
    setUser(state, payload) {
        state.user = payload;
        const jsonUser = JSON.stringify(payload);
        localStorage.setItem('user', jsonUser);
    },

    setToken(state, payload) {
        state.token = payload;
        localStorage.setItem('token', payload);
    },

    setValidTo(state, payload) {
        state.validTo = payload;
        localStorage.setItem('validTo', payload);
    },
}