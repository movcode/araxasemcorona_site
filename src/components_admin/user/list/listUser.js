import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import { action } from '../../../store/userRedux'

export default ({ remove, edit }) => {
    const [users, _users] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();

    useEffect(() => {
        !users && response.result === "" && dispatch(action.list())

        if (response.from === "usuario" && response.status) {
            _users(response.result);
        }

    }, [dispatch, users, response]);

    return (
        <>
            {
                users &&
                users.map(user => <Card key={user._id}
                    title={user.name}
                    subtitle={<Buttons onDelete={remove} data={user} />}
                />)
            }
        </>
    );
}


