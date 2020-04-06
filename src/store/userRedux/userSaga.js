import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';


const dispatch = (success, result) => success
    ? put(action.response("usuario", true, result))
    : put(action.response("usuario", false, result));

const getInApi = async () => await Api.get(Api.url.user, true);
const storeInApi = async user => await Api.post(Api.url.user, user, true);
const removeInApi = async id => await Api.remove(Api.url.user, id, true);

function* list() {
    try {
        const resp = yield call(getInApi);
        if (resp.status === 200) {
            return yield dispatch(true, resp.data)
        }
        yield dispatch(false, Msgs(false).store)
        return yield Alert.List(false);
    } catch (err) {
        yield dispatch(false, Msgs(false).store)
        return yield Alert.List(false);
    }
}

function* store(ac) {
    const { payload } = ac;
    try {
        const resp = yield call(storeInApi, payload);
        if (resp.status === 200) {
            yield list();
            return yield Alert.Store(true);
        }
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Store(false);

    } catch (err) {
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Store(false);
    }
}

function* remove(ac) {
    const { payload } = ac;
    try {
        const resp = yield call(removeInApi, payload);
        if (resp.status === 200) {
            yield list();
            return yield Alert.Remove(true);
        }
        yield dispatch(false, Msgs(false).remove)
        return yield Alert.Remove(false);
    } catch (err) {
        yield dispatch(false, Msgs(false).remove);
        return yield Alert.Remove(false);
    }
}



export default function* observer() {
    yield takeLatest(ActionMap.user.list, list);
    yield takeLatest(ActionMap.user.store, store);
    yield takeLatest(ActionMap.user.remove, remove);    

}