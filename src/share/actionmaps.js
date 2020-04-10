export default ({
    upload: {
        send: "@@UPLOAD/UPLOAD",
        getImage: "@@UPLOAD/GETIMAGE"
    },
    response: {
        show: "@@RESPONSE/RESULT",
        clear: "@@RESPONSE/CLEAR"
    },
    establishment: {
        list: "@@ESTABLISHMENT/LIST",
        store: "@@ESTABLISHMENT/CREATE",
        remove: "@@ESTABLISHMENT/DELETE",
        update: "@@ESTABLISHMENT/UPDATE",
        approved: "@@ESTABLISHMENT/APPROVED",
    },
    delivery: {
        list: "@@DELIVERY/LIST",
        store: "@@DELIVERY/CREATE",
        remove: "@@DELIVERY/DELETE",
        update: "@@DELIVERY/UPDATE",
    },
    login: {
        auth: "@@LOGIN/AUTH"
    },
    sector: {
        list: "@@SECTOR/LIST",
        store: "@@SECTOR/CREATE",
        remove: "@@SECTOR/REMOVE",
        update: "@@SECTOR/UPDATE",
        listIcon: "@@SECTOR/LIST_ICON",
    },
    categorie: {
        list: "@@CATEGORIE/LIST",
        store: "@@CATEGORIE/CREATE",
        remove: "@@CATEGORIE/REMOVE",
        update: "@@CATEGORIE/UPDATE",
    },
    user: {
        list: "@@USER/LIST",
        store: "@@USER/CREATE",
        remove: "@@USER/REMOVE",
        update: "@@USER/UPDATE",
    },
    contact: {
        send: "@@CONTACT/SEND"
    },
    config: {
        list: "@@CONFIGS/LIST",
        update: "@@CONFIGS/UPDATE",
    }
});