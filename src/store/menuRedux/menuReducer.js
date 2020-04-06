
const INITIAL_STATE = {
    show: 0,
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    

    switch (type) {
        case "showMenu": return { ...state, show: payload };
        default: return state;
    }
}