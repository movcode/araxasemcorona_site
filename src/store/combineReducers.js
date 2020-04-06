import { combineReducers } from 'redux';
import { reducer as MenuReducer } from './menuRedux';
import { reducer as responseReducer } from './responseSagaRedux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    menu: MenuReducer,
    form: formReducer,
    response: responseReducer
});