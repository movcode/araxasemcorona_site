import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../share_components/card';
import { action } from '../../../store/establishmentAdminRedux';
import { Api } from '../../../share/api';
import { Row } from 'react-bootstrap';

export default ({ remove, edit }) => {

    const [establishments, _establishments] = useState(false);
    const [filtered, _filtered] = useState(false);
    const [sectors, _sectors] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [confirmed, _confirmed] = useState(null);


    useEffect(() => {
        !establishments && response.result === "" && dispatch(action.list());
        response.from === "estabelecimento" && response.status && _establishments(response.result)

    }, [response, dispatch, establishments]);

    useEffect(() => {
        let isSubscrible = true;

        const fetch = async () => {
            const result = await Api.get(Api.url.sector, false);
            isSubscrible && result.data && _sectors(result.data);
        }
        fetch()
        return () => isSubscrible = false;
    }, []);

    const filter = id => {
        if (id !== "all") {
            const filtered = establishments.filter(e => e.sector === id);
            filtered && _filtered(filtered);
        } else {
            _filtered(false)
        }
    }

    const confirm = data => {
        _confirmed(data._id)
        if (confirmed) {
            remove(data)
            _confirmed(null)
        }
    }

    const changeStatus = (id, status) => dispatch(action.approved(id, status));

    return (<>
        <div>
            <div className="form-group">
                <select className="form-control" style={{ color: "black" }}
                    onChange={(e) => filter(e.target.value)}>
                    <option value="" disabled>Selecione um setor</option>
                    <option value="all">Buscar por setor</option>
                    <option value="all">Todos</option>
                    {sectors && sectors.map(sector =>
                        <option key={sector._id} value={sector._id}>{sector.title}</option>
                    )}
                </select>
            </div>
            {
                establishments &&
                    !filtered ?
                    establishments.map(data => <Card key={data._id}
                        img={data.img}
                        title={data.name}
                        subtitle={
                            <div>
                                <Row style={{ color: "black", margin: '5px' }}>{data.categorie.name}</Row>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ marginBottom: "10px" }}>
                                    {data.approved
                                        ? <div
                                            onClick={() => changeStatus(data._id, false)}
                                            className="btn btn-danger btn-sm">Desabilitar</div>

                                        : <div
                                            onClick={() => changeStatus(data._id, true)}
                                            className="btn btn-success btn-sm">Aprovar</div>
                                    }

                                    {edit &&
                                        <div onClick={() => edit(data)} className="btn btn-warning btn-sm">Editar</div>}


                                    <div onClick={() => confirm(data)}
                                        className="btn btn-danger btn-sm">{confirmed === data._id ? "Confirmar" : "Excluir"}</div>


                                    {confirmed === data._id &&
                                        <div onClick={() => _confirmed(null)}
                                            className="btn btn-primary btn-sm">Cancelar</div>}
                                </div>
                            </div>
                        }
                    />) :
                    filtered && filtered.map(data => <Card key={data._id}
                        img={data.img}
                        title={data.name}
                        subtitle={

                            <div>
                                <Row style={{ color: "black", margin: '5px' }}>{data.categorie.name}</Row>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ marginBottom: "10px" }}>
                                    {data.approved
                                        ? <div
                                            onClick={() => changeStatus(data._id, false)}
                                            className="btn btn-danger btn-sm">Desabilitar</div>

                                        : <div
                                            onClick={() => changeStatus(data._id, true)}
                                            className="btn btn-success btn-sm">Aprovar</div>
                                    }

                                    {edit &&
                                        <div onClick={() => edit(data)} className="btn btn-warning btn-sm">Editar</div>}


                                    <div onClick={() => confirm(data)}
                                        className="btn btn-danger btn-sm">{confirmed === data._id ? "Confirmar" : "Excluir"}</div>


                                    {confirmed === data._id &&
                                        <div onClick={() => _confirmed(null)}
                                            className="btn btn-primary btn-sm">Cancelar</div>}
                                </div>
                            </div>
                        }
                    />)

            }

        </div>
    </>);
}


