import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.categorie.list,
        payload: "",
    }),
    store: (data) => ({
        type: Action.categorie.store,
        payload: data,
    }),
    remove: (id) => ({
        type: Action.categorie.remove,
        payload: id,
    }),
    update: (id, params) => ({
        type: Action.categorie.update,
        payload: { id, params },
    }),
}