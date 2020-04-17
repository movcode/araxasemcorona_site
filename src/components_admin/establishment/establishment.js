import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, change } from 'redux-form';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Row from '../../components/share_components/row'
import Form from './form';
import List from './list';
import { action } from '../../store/establishmentAdminRedux';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;




export default props => {
    const dispatch = useDispatch();
    const [storeOrEdit, _storeOrEdit] = useState("store");

    const FormName = "formEstablishmentAdmin";

    const store = (data) => {        
        
        if (storeOrEdit !== "editar") {
            dispatch(action.store(data))
        } else {
            dispatch(action.update(data.id, data));
            _storeOrEdit("store");
        }

        dispatch(reset(FormName));
    }

    const remove = data => {        
        dispatch(action.remove(data._id));
        scroll.scrollToTop();
    }

    const editForm = data => {        
        dispatch(change(FormName, "id", data._id));
        dispatch(change(FormName, "name", data.name));
        dispatch(change(FormName, "email", data.email));
        dispatch(change(FormName, "password", data.password));
        dispatch(change(FormName, "sector", data.sector));
        dispatch(change(FormName, "categorie", data.categorie));
        dispatch(change(FormName, "delivery", data.delivery));
        dispatch(change(FormName, "hourWork", data.hourWork));
        dispatch(change(FormName, "whatsapp", data.whatsapp));
        dispatch(change(FormName, "social", data.social));
        dispatch(change(FormName, "img", data.img));
        dispatch(change(FormName, "description", data.description));
        _storeOrEdit("editar");
        scroll.scrollToTop();
    }

    return (
        <Background>
            <Menu />

            <Container>
                <Title>ESTABELECIMENTOS</Title>
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
