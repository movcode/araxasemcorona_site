import Action from '../../share/actionmaps';

export default {
    response: (from, status,  result) => ({
        type: Action.response.show,
        payload: { from,status, result }
    }),

    clear: () => ({
        type: Action.response.clear,
        payload: {
            from: "",
            status:"",
            result: ""
        }
    })
}