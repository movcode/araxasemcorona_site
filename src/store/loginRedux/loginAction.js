import Action from '../../share/actionmaps';
export default {

    auth: credentials => ({
        type: Action.login.auth,
        payload: credentials
    }),

};