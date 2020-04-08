import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { change } from 'redux-form';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Row from '../../components/share_components/row'
import Form from './form';
import List from './list';
import { action } from '../../store/categorieRedux';
import Center from '../../components/share_components/center';



const Categorie = props => {
    const dispatch = useDispatch();
    const [storeOrEdit, _storeOrEdit] = useState("store");
    const form = "formCategorie";

    const store = (data) =>
        storeOrEdit !== "editar"
            ? dispatch(action.store(data))
            : dispatch(action.update(data.id, data));

    const remove = data => dispatch(action.remove(data._id));

    const editForm = data => {
        dispatch(change(form, "id", data._id));
        dispatch(change(form, "sector", data.sector));
        dispatch(change(form, "name", data.name));
        _storeOrEdit("editar");
    }

    return (
        <Background>
            <Menu />

            <Container>
                <Title>CATEGORIAS</Title>
                <Center bottom="20px">Obs: Ao deletar a categorias todos os seus respectivos estebelecimentos serão afetadas</Center>
                <Row>                    
                    <div className="col-md-6">
                        <Form onSubmit={store} status={storeOrEdit} />
                    </div>
                    <div className="col-md-6">
                        <List remove={remove} edit={editForm} />
                    </div>
                </Row>
            </Container>
        </Background>
    )
}
export default Categorie;