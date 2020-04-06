import Action from '../../share/actionmaps';

const INITAIL_STATE = {
    response: { from: "", status: "", result: "" },
}

export default (state = INITAIL_STATE, action) => {
    const { type, payload } = action;

    const clear = { from: "", status: "", result: "" };

    switch (type) {
        case Action.response.show: return { ...state, response: payload }
        case Action.response.clear: return { ...state, response: clear }
        default: return state;
    }
}