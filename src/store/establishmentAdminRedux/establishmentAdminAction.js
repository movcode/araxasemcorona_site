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
}