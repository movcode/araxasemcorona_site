import Action from '../../share/actionmaps';
export default {

    upload: (img) => ({
        type: Action.upload.send,
        payload: { img }
    })    
}