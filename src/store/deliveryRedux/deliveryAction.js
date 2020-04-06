import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.delivery.list,
        payload: "",
    }),
    store: (data) => ({
        type: Action.delivery.store,
        payload: data,
    }),
    remove: (id) => ({
        type: Action.delivery.remove,
        payload: id,
    }),
    update: (id, params) => ({
        type: Action.delivery.update,
        payload: { id, params },
    }),
}