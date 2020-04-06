import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import { action } from '../../../store/deliveryRedux'
import Row from '../../../components/share_components/row';


export default ({ remove, edit }) => {
    const [delivery, _delivery] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();

    useEffect(() => {
        !delivery && response.result === "" && dispatch(action.list())

        if (response.from === "entregador" && response.status) {
            _delivery(response.result);
        }

    }, [dispatch, delivery, response]);

    return (
        <>
            {
                delivery &&
                delivery.map(person => <Card key={person._id}

                    title={person.name}
                    subtitle={
                        <div>
                            <Row>
                                <div style={{ color: "black"}}>Whatsapp: {person.whatsapp}</div>
                            </Row>
                            <Row>
                                <div style={{ color: "black"}}>Veículo: {person.veichle}</div>
                            </Row>
                            <Row>
                                <div style={{ color: "black"}}>CNH: {person.cnh}</div>
                            </Row>
                            <Row>
                                <div style={{ color: "black"}}>Placa: {person.numberBoard}</div>
                            </Row>
                            <Row>
                                <div style={{ color: "black"}}>Funcionamento: {person.hourWork}</div>
                            </Row>
                            <Buttons onDelete={remove} onEdit={edit} data={person} />
                        </div>
                    }
                />)
            }
        </>
    );
}


