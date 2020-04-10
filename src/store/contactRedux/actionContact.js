import ActionMap from '../../share/actionmaps';

export default ({
    send: (data) => ({
        type: ActionMap.contact.send,
        payload: data
    })
});