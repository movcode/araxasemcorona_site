import Action from '../../share/actionmaps';

export default {
    list: () => ({
        type: Action.config.list,
        payload: "",
    }),

    update: (id, params) => ({
        type: Action.config.update,
        payload: { id, params },
    }),
}