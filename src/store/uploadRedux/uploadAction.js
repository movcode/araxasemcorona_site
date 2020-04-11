import Action from '../../share/actionmaps';
export default {

    upload: (img) => ({
        type: Action.upload.send,
        payload: { img }
    }),
    upload_sector: (img) => ({
        type: Action.upload.send_sector,
        payload: { img }
    })
}