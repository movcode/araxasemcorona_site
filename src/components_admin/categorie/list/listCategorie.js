import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import { action } from '../../../store/categorieRedux';
import { Api } from '../../../share/api';

export default ({ remove, edit }) => {
    const [categories, _categories] = useState(false);
    const [filtered, _filtered] = useState(false);
    const [sectors, _sectors] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();


    useEffect(() => {
        !categories && response.result === "" && dispatch(action.list())
        response.from === "categoria" && response.status && _categories(response.result)
    }, [categories, response, dispatch]);

    useEffect(() => {
        let isSubscrible = true;

        const fetch = async () => {
            const result = await Api.get(Api.url.sector, false);
            isSubscrible && result.data && _sectors(result.data);
        }
        fetch()
        return () => isSubscrible = false;
    }, []);

    const filter = data => {
        if (data !== "all") {
            const filtered = categories.filter(c => c.sector === data);
            filtered && _filtered(filtered);
        } else {
            _filtered(false)
        }
    }

    return (
        <div>
            <div className="form-group">
                <select className="form-control" style={{ color: "black" }}
                    onChange={(e) => filter(e.target.value)}>
                    <option value="" disabled>Selecione um setor</option>
                    <option value="all">Todos</option>
                    {sectors && sectors.map(sector =>
                        <option key={sector._id} value={sector._id}>{sector.title}</option>
                    )}
                </select>
            </div>
            {
                categories &&
                    !filtered ?
                    categories.map(categorie =>
                        categorie.name !== "Sem Categoria" &&
                        <Card key={categorie._id}
                            title={categorie.name}
                            subtitle={<Buttons onDelete={remove} onEdit={edit} data={categorie} />}
                        />)
                    : filtered && filtered.map(categorie =>
                        categorie.name !== "Sem Categoria" &&
                        <Card key={categorie._id}
                            title={categorie.name}
                            subtitle={<Buttons onDelete={remove} onEdit={edit} data={categorie} />}
                        />)
            }
        </div>
    );
}


