import Action from '../../share/actionmaps';
export default {

    upload: (img, name) => ({
        type: Action.firebase_storage.upload,
        payload: { img, name }
    }),
    getImg: (img) => ({
        type: Action.firebase_storage.getImage,
        payload: { img }
    }),
}