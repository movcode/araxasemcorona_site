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


function* upload(ac) {
    const { img } = ac.payload;    
    console.log(img);
    try {
        const resp = yield call(sendFile, img);
        if (resp) {
            yield dispatch(true, { img: `${Api.url.base}${resp.data}` })
            return yield Alert.Upload(true, "");
        } else {
            yield dispatch(false, Msgs(false).send)
            return yield Alert.Send(false);
        }

    } catch (err) {
        yield dispatch(false, Msgs(false).send)
        return yield Alert.Upload(false, err.response.data);
    }
}

export default function* observer() {
    yield takeLatest(ActionMap.firebase_storage.upload, upload);
}