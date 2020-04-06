import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import { action } from '../../store/loginRedux';
import { reset } from 'redux-form';
import Load from '../../components/share_components/load';
import { StorageKeys } from '../../share/api';
import { useHistory } from 'react-router-dom';




const Login = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [load, _load] = useState(false);
    const { response } = useSelector(state => state.response);


    useEffect(() => {
        if (response.from === "login") {
            const { from, status, result } = response;

            from === "login" && _load(false);

            if (status) {
                const { token, user } = result;
                localStorage.setItem(StorageKeys.token, token);
                localStorage.setItem(StorageKeys.name_user, user.name);
                history.push("dash/");
            } else {
                alert("usuario ou senha incorreto")
            }
        }

    }, [response, history]);


    const login = credentials => {
        dispatch(action.auth(credentials));
        dispatch(reset('formLogin'));
        _load(true);
    }


    return (<>
        {load && <Load />}
        <LoginForm onSubmit={login} />
    </>);
}

export default Login;