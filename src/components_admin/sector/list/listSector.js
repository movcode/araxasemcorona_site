import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import { action } from '../../../store/sectorRedux'

export default ({ remove, edit }) => {
    const [sectors, _sectors] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();

    useEffect(() => {
        !sectors && response.result === "" && dispatch(action.list())

        if (response.from === "setor" && response.status) {
            _sectors(response.result);
        }

    }, [dispatch, sectors, response]);

    return (
        <>
            {
                sectors &&
                sectors.map(sector => <Card key={sector._id}
                    img={sector.icon}
                    title={sector.title}
                    subtitle={<Buttons onDelete={remove} onEdit={edit} data={sector} />}
                />)
            }
        </>
    );
}


