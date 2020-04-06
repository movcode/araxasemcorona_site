import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { action } from '../../../store/establishmentAdminRedux';


export default ({ establishment }) => {
    const dispatch = useDispatch();
    const [confirmed, _confirmed] = useState(false);
    const confirm = data => {
        _confirmed(true)

        if (confirmed)
            dispatch(action.remove(data._id));
    }

    const changeStatus = (id, status) => dispatch(action.approved(id, status));

    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ marginBottom: "10px" }}>
            {establishment.approved
                ? <div
                    onClick={() => changeStatus(establishment._id, false)}
                    className="btn btn-danger btn-sm">Desabilitar</div>

                : <div
                    onClick={() => changeStatus(establishment._id, true)}
                    className="btn btn-success btn-sm">Aprovar</div>
            }

            <div onClick={() => confirm(establishment)}
                className="btn btn-danger btn-sm">{confirmed ? "Confirmar" : "Excluir"}</div>

            {confirmed &&
                <div onClick={() => _confirmed(false)}
                    className="btn btn-primary btn-sm">Cancelar</div>}

                    <div className="btn btn-default btn-sm" data-fancybox data-src="#detailbox">Visualizar</div>
        </div>);
}
