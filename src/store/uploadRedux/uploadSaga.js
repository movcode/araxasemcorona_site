import ActionMap from '../../share/actionmaps';
import { action } from '../responseSagaRedux';
import { takeLatest, call, put } from 'redux-saga/effects';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';
import { Api } from '../../share/api';

const dispatch = (success, response) => success
    ? put(action.response("upload", true, response))
    : put(action.response("upload", false, response))


const sendFile = async (img) => await Api.upload(Api.url.upload, img);
const sendFileSector = async (img) => await Api.upload(Api.url.upload_icon, img,);


function* upload(ac) {    
    const { img } = ac.payload;
    try {
        const resp = yield call(sendFile, img);
        if (resp && resp.data) {
            yield dispatch(true, { img: `${Api.url.base}${resp.data}` })            
        } else {
            yield dispatch(false, Msgs(false).send)
            return yield Alert.Send(false);
        }

    } catch (err) {
        yield console.log(err.response)
        yield dispatch(false, Msgs(false).send)
        return yield Alert.Upload(false, err.response.data.error);
    }
}

function* upload_sector(ac) {    
    const { img } = ac.payload;
    try {
        const resp = yield call(sendFileSector, img);
        if (resp && resp.data) {
            yield dispatch(true, { img: `${Api.url.base}${resp.data}` })            
        } else {
            yield dispatch(false, Msgs(false).send)
            return yield Alert.Send(false);
        }

    } catch (err) {        
        yield dispatch(false, Msgs(false).send)
        return yield Alert.Upload(false, err.response.data.error);
    }
}

export default function* observer() {
    yield takeLatest(ActionMap.upload.send, upload);
    yield takeLatest(ActionMap.upload.send_sector, upload_sector);
}