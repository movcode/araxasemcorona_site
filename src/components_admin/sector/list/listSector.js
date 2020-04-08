import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import Center from '../../../components/share_components/center';
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
        <div>
            <Center>Obs: Ao deletar o setor todos os seus respectivas categorias serão afetadas</Center>
            {
                sectors &&
                sectors.map(sector => <Card key={sector._id}
                    img={sector.icon}
                    title={sector.title}
                    subtitle={<Buttons onDelete={remove} onEdit={edit} data={sector} />}
                />)
            }
        </div>
    );
}


