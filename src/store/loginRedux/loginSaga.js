import { takeLatest, put, call } from 'redux-saga/effects';
import { action } from '../../store/responseSagaRedux';
import ActionMap from '../../share/actionmaps';
import { Api } from '../../share/api';

const dispatch = (success, result) => success
    ? put(action.response("login", true, result))
    : put(action.response("login", false, result));

const authApi = async credential => await Api.post(Api.url.login, credential, false);

function* auth(ac) {
    const { payload } = ac;
    try {
        const response = yield call(authApi, payload);
        response.data !== null
            ? yield dispatch(true, response.data)
            : yield dispatch(false, "Error ao realizar o login")
    } catch (err) {
        if (err.response) {
            err.response.status === 401
                ? yield dispatch(false, "Usuário ou senha incorreto")
                : yield dispatch(false, "Error ao realizar o login");
        }
    }
}

export default function* observer() {
    yield takeLatest(ActionMap.login.auth, auth);
}