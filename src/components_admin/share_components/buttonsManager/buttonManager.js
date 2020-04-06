import React, { useState } from 'react';
import Row from '../../../components/share_components/row'

export default ({ onDelete, onEdit, data, without }) => {
    const [confirmed, _confirmed] = useState(false);

    const confirm = () => {
        _confirmed(true)
        if (confirmed) return onDelete(data);
    }

    return (
        <Row>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {without !== "delete" && <div onClick={confirm} className="btn btn-danger btn-sm">{confirmed ? "Confirmar" : "Excluir"}</div>}

                {confirmed &&
                    <div onClick={() => _confirmed(false)}
                        className="btn btn-primary btn-sm">Cancelar</div>}

                {onEdit && without !== "edit" && <div onClick={() => onEdit(data)} className="btn btn-warning btn-sm">Editar</div>}
            </div>
        </Row>);
}