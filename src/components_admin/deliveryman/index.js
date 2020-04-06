import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, change } from 'redux-form';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Row from '../../components/share_components/row'
import Form from './form';
import List from './list';
import { action } from '../../store/deliveryRedux'

export default  props => {
    const dispatch = useDispatch();

    const [storeOrEdit, _storeOrEdit] = useState("store");

    const form = "formDeliveryAdmin";


    const store = (data) => {
        storeOrEdit !== "editar"
            ? dispatch(action.store(data))
            : dispatch(action.update(data.id, data));

        dispatch(reset(form));
    }

    const remove = data => dispatch(action.remove(data._id));

    const editForm = data => {
        dispatch(change(form, "id", data._id));        
        dispatch(change(form, "name", data.name));                
        dispatch(change(form, "address", data.address));                
        dispatch(change(form, "numberBoard", data.numberBoard));                
        dispatch(change(form, "cnh", data.cnh));                
        dispatch(change(form, "veichle", data.veichle));                
        dispatch(change(form, "hourWork", data.hourWork));                
        dispatch(change(form, "whatsapp", data.whatsapp));                
        dispatch(change(form, "whatsapp", data.whatsapp));                
        _storeOrEdit("editar");
    }

    return (
        <Background>
            <Menu />

            <Container>
                <Title>ENTREGADORES</Title>
                <Row>
                    <div className="col-md-6">
                        <Form onSubmit={store} status={storeOrEdit} />
                    </div>
                    <div className="col-md-6">
                        <List  remove={remove} edit={editForm} />
                    </div>
                </Row>
            </Container>
        </Background>
    )
}
