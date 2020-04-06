import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../share_components/card';
import { action } from '../../../store/establishmentAdminRedux';

export default ({ remove, edit }) => {
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();

    const [confirmed, _confirmed] = useState(false);
    const [establishments, _establishments] = useState(false);

    useEffect(() => {
        !establishments && response.result === "" && dispatch(action.list());
        response.from === "estabelecimento" && response.status && _establishments(response.result)

    }, [response, dispatch, establishments]);



    const confirm = data => {
        _confirmed(true)
        if (confirmed) return remove(data);
    }

    const changeStatus = (id, status) => dispatch(action.approved(id, status));

    return (<>
        {
            establishments &&
            establishments.map(establishment => <Card key={establishment._id}
                img={establishment.img}
                title={establishment.name}
                subtitle={
                    <div>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ marginBottom: "10px" }}>
                            {establishment.approved
                                ? <div
                                    onClick={() => changeStatus(establishment._id, false)}
                                    className="btn btn-danger btn-sm">Desabilitar</div>

                                : <div
                                    onClick={() => changeStatus(establishment._id, true)}
                                    className="btn btn-success btn-sm">Aprovar</div>
                            }
                            {edit &&
                                <div onClick={() => edit(establishment)} className="btn btn-warning btn-sm">Editar</div>}

                            <div onClick={() => confirm(establishment)}
                                className="btn btn-danger btn-sm">{confirmed ? "Confirmar" : "Excluir"}</div>

                            {confirmed &&
                                <div onClick={() => _confirmed(false)}
                                    className="btn btn-primary btn-sm">Cancelar</div>}
                        </div>
                    </div>
                }
            />)
        }
    </>);
}


