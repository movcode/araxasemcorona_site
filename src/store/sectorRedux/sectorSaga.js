import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../../store/responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';


const dispatch = (success, result) => success
    ? put(action.response("setor", true, result))
    : put(action.response("setor", false, result));

const getInApi = async url => await Api.get(url, false);
const storeInApi = async sector => await Api.post(Api.url.sector, sector, true);
const removeInApi = async id => await Api.remove(Api.url.sector, id, true);
const updateInApi = async (id, params) => await Api.put(Api.url.sector, id, params, true);

function* list() {
    try {
        const resp = yield call(getInApi, Api.url.sector);
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
    yield takeLatest(ActionMap.sector.list, list);
    yield takeLatest(ActionMap.sector.store, store);
    yield takeLatest(ActionMap.sector.remove, remove);
    yield takeLatest(ActionMap.sector.update, update);

}