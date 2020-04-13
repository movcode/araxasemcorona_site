import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.establishment.list,
        payload: "",
    }),
    store: (data) => ({
        type: Action.establishment.store,
        payload: data,
    }),
    remove: (id) => ({
        type: Action.establishment.remove,
        payload: id,
    }),
    update: (id, params) => ({
        type: Action.establishment.update,
        payload: { id, params },
    }),
    approved: (id, status) => ({
        type: Action.establishment.approved,
        payload: { id, status },
    }),
    auth: (credential) => ({
        type: Action.establishment.auth,
        payload: credential,
    }),
    update_auth: (id, params ) => ({
        type: Action.establishment.update_auth,
        payload: { id, params },
    }),
}