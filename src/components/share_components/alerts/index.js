import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { BoxAlert } from './style'
import { useLocation } from 'react-router-dom'
import path_admin from '../../../routes/path_admin';

export default (props) => {
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [show, _show] = useState(false);
    let location = useLocation();
    let responsePath = path_admin + response.from;


    useEffect(() => {

        // if (responsePath === location.pathname) {
        //     dispatch(action.clear());
        // }


        console.log(response);

    }, [response, responsePath, location,dispatch]);

    const close = () => { _show(false) }

    return (<>
        {
            show &&
            <BoxAlert >
                <Alert onClose={close} variant={response.status === false ? "danger" : "success"} dismissible>
                    {response.result}
                </Alert>
            </BoxAlert>
        }
    </>)
}