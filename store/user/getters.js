import moment from 'moment';

export default {
    getUserInfo(state) {
        return {
            user: state.user,
            token: state.token,
            validTo: state.validTo,
        }
    },

    authenticated(state) {
        let token = state.token;
        let validTo = state.validTo;

        if(process.client) {
            token = localStorage.getItem('token');
            validTo = localStorage.getItem('validTo');
        }

        if(token !== '' && token !== null) {
            if(moment().isBefore(moment(validTo))) {
                return true
            } else {
            return false;
            }
        } else {
            return false;
        }
    }
}