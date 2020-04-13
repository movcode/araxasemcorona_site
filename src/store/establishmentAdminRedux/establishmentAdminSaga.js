import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';


const dispatch = (success, result) => success
    ? put(action.response("estabelecimento", true, result))
    : put(action.response("estabelecimento", false, result));

const getInApi = async () => await Api.get(Api.url.establishment, true);
const storeInApi = async data => await Api.post(Api.url.establishment, data, false);
const removeInApi = async id => await Api.remove(Api.url.establishment, id, true);
const updateInApi = async (id, params) => await Api.put(Api.url.establishment, id, params, false);
const approvedInApi = async (id, params) => await Api.put(Api.url.approved, id, params, true);


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
            return yield Alert.Custom(true, "Aguardando aprovação do administrador...");
        }
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Store(false, "Error ao adicionar o estabelecimento");
    } catch (err) {
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Store(false, err.response.data.error);
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
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Remove(false);
    } catch (err) {
        yield dispatch(false, Msgs(false).remove);
        return yield Alert.Remove(true);
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
        yield dispatch(false, Msgs(false).store)
        return yield Alert.Update(false);
    } catch (err) {
        yield dispatch(false, Msgs(false).update)
        return yield Alert.Update(false);
    }
}
function* approved(ac) {
    const { payload } = ac;
    yield console.log(payload)
    try {
        const resp = yield call(approvedInApi, payload.id, { status: payload.status });
        if (resp.status === 200) {
            yield list();
            return yield Alert.Approved(true);
        }
        yield dispatch(false, "Não foi possível aprovar o estabelecimento")
        return yield Alert.Approved(false);
    } catch (err) {
        yield dispatch(false, "Não foi possível aprovar o estabelecimento")
        return yield Alert.Approved(false);
    }
}


export default function* observer() {
    yield takeLatest(ActionMap.establishment.list, list);
    yield takeLatest(ActionMap.establishment.store, store);
    yield takeLatest(ActionMap.establishment.remove, remove);
    yield takeLatest(ActionMap.establishment.update, update);
    yield takeLatest(ActionMap.establishment.approved, approved);
}