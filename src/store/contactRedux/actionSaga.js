import { takeLatest, call, put } from 'redux-saga/effects';
import ActionMap from '../../share/actionmaps';
import *as Alert from '../commons/alerts';
import { Api } from '../../share/api';
import { action } from '../responseSagaRedux';


const dispatch = (status, response) =>
    put(action.response("contato", status, response));

const sendToApi = async (payload) => await Api.post(Api.url.contact, payload, false);

function* send(ac) {
    const { payload } = ac;
    try {
        const resp = yield call(sendToApi, payload);
        if (resp.status === 200) {
            yield dispatch(true, resp.data);
            return Alert.Contact(true, resp.data);
        } else {
            yield dispatch(false, resp.data);
            return yield Alert.Send(false);
        }
    } catch (err) {
        yield dispatch(false, err);
        return Alert.Contact(false, err.response.data.error);
    }
}

export default function* observer() {
    yield takeLatest(ActionMap.contact.send, send);
}