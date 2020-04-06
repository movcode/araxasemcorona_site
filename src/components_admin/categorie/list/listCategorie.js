import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../share_components/card';
import Buttons from '../../share_components/buttonsManager';
import { action } from '../../../store/categorieRedux';

export default ({ remove, edit }) => {
    const [categories, _categories] = useState(false);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();


    useEffect(() => {
        !categories && response.result ==="" && dispatch(action.list())
        response.from === "categoria" && response.status && _categories(response.result)
    }, [categories, response, dispatch]);


    return (
        <>
            {
                categories &&
                categories.map(categorie => <Card key={categorie._id}
                    title={categorie.name}
                    subtitle={<Buttons onDelete={remove} onEdit={edit} data={categorie} />}
                />)
            }
        </>
    );
}


