import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.user.list,
        payload: "",
    }),
    store: (data) => ({
        type: Action.user.store,
        payload: data,
    }),
    remove: (id) => ({
        type: Action.user.remove,
        payload: id,
    }),


}