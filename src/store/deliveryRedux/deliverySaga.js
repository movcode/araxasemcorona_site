import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';

const dispatch = (success, result) => success
    ? put(action.response("entregador", true, result))
    : put(action.response("entregador", false, result));

const getInApi = async () => await Api.get(Api.url.deliveryman, false);
const storeInApi = async delivery => await Api.post(Api.url.deliveryman, delivery, false);
const removeInApi = async id => await Api.remove(Api.url.deliveryman, id, true);
const updateInApi = async (id, params) => await Api.put(Api.url.deliveryman, id, params, true);

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

function* update(ac) {
    const { payload } = ac;
    try {
        const resp = yield call(updateInApi, payload.id, payload.params);
        if (resp.status === 200) {
            yield list();
            return yield Alert.Update(true);
        }
        yield dispatch(false, Msgs(false).update)
        return yield Alert.Update(false);
    } catch (err) {
        yield dispatch(false, Msgs(false).update)
        return yield Alert.Update(false);
    }
}



export default function* observer() {
    yield takeLatest(ActionMap.delivery.list, list);
    yield takeLatest(ActionMap.delivery.store, store);
    yield takeLatest(ActionMap.delivery.remove, remove);    
    yield takeLatest(ActionMap.delivery.update, update);    

}