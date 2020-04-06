import { all } from 'redux-saga/effects';

import { UploadSaga } from './uploadRedux';
import { LoginSaga } from './loginRedux';
import { SectorSaga } from './sectorRedux';
import { CategorieSaga } from './categorieRedux';
import { EstablishmentAdminSaga } from './establishmentAdminRedux';
import { UserSaga } from './userRedux';
import { DeliverySaga } from './deliveryRedux';
import { ConfigSaga } from './configSaga';

export default function* combineSagas() {
    yield all([
        UploadSaga(),
        LoginSaga(),
        SectorSaga(),
        CategorieSaga(),
        EstablishmentAdminSaga(),
        UserSaga(),
        DeliverySaga(),
        ConfigSaga(),
    ]);
}