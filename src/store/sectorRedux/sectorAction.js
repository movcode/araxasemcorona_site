import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.sector.list,
        payload: "",
    }),
    store: (data) => ({
        type: Action.sector.store,
        payload: data,
    }),
    remove: (id) => ({
        type: Action.sector.remove,
        payload: id,
    }),
    update: (id, params) => ({
        type: Action.sector.update,
        payload: { id, params },
    }),
    listIcon: () => ({
        type: Action.sector.listIcon,
        payload: "",
    }),

}