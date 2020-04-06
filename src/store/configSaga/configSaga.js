import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';
import Msgs from '../commons/msgs';
import * as Alert from '../commons/alerts';

const dispatch = (success, result) => success
    ? put(action.response("config", true, result))
    : put(action.response("config", false, result));

const getInApi = async () => await Api.get(Api.url.config, false);
const updateInApi = async (id, params) => await Api.put(Api.url.config, id, params, true);

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
    yield takeLatest(ActionMap.config.list, list);
    yield takeLatest(ActionMap.config.update, update);

}