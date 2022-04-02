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
        const token = state.token;
        const validTo = state.validTo;

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