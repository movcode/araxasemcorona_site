import React, { useLayoutEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { StorageKeys, Api } from '../share/api';
// import Login from '../components_admin/login';

const Cnpt = (props, Component, storage) => (<Component {...props} storage={storage} />);

export default ({ component: Component, ...rest }) => {
    const SetHeader = token => ({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    })

    const [isAuth, _isAuth] = useState(null)


    useLayoutEffect(() => {
        const validToken = async token => {

            const resp = await fetch(Api.url.verifyToken, {
                method: "POST",
                headers: SetHeader(token)
            })

            if (resp.status === 200) {
                _isAuth(true)
            } else {
                _isAuth(false)
            }
        }

        validToken(localStorage.getItem(StorageKeys.token))
    }, [])


    return <Route {...rest} render={p => {
        if (isAuth) {
            return Cnpt(p, Component, StorageKeys)
        } else {
            if (isAuth !== null) {
                return window.location.href="/admin/bugani/login"
            }
        }
    }} />
}