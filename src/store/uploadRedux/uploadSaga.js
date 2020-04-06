import ActionMap from '../../share/actionmaps';
import { action } from '../responseSagaRedux';
import { takeLatest, call, put } from 'redux-saga/effects';
import { StorageFierbase } from '../../share/firebase';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';

const dispatch = (success, response) => success
    ? put(action.response("upload", true, response))
    : put(action.response("upload", false, response))


const uploadFirebase = (img, name) => StorageFierbase.upload(img, name);


function* upload(ac) {
    const { img, name } = ac.payload;

    try {
        const resp = yield call(uploadFirebase, img, name);
        if (resp) {
            yield dispatch(true, { img: resp })
            return yield Alert.Send(true);
        } else {
            yield dispatch(false, Msgs(false).send)
            return yield Alert.Send(false);
        }

    } catch (err) {
        yield dispatch(false, Msgs(false).send)
        return yield Alert.Send(false);
    }
}

export default function* observer() {
    yield takeLatest(ActionMap.firebase_storage.upload, upload);
}