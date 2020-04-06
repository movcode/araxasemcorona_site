import { createStore, applyMiddleware } from 'redux';
import createSagaMid from 'redux-saga';

import combineReducers from './combineReducers';
import combineSagas from './combineSaga';

const sagaMid = createSagaMid();

const mids = [sagaMid];

const store = createStore(
    combineReducers,
    applyMiddleware(...mids),
);

sagaMid.run(combineSagas);
export default store;