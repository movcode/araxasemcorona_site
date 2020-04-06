import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Row from '../../components/share_components/row'
import Form from './form';
import List from './list';
import { action } from '../../store/userRedux'

const Setor = props => {
    const dispatch = useDispatch();


    const store = (user) => {
        dispatch(action.store(user))

        dispatch(reset('formUser'));
    }

    const remove = data => dispatch(action.remove(data._id));

    return (
        <Background>
            <Menu />

            <Container>
                <Title>ADMINISTRADORES</Title>
                <Row>
                    <div className="col-md-6">
                        <Form onSubmit={store} />
                    </div>
                    <div className="col-md-6">
                        <List remove={remove} />
                    </div>
                </Row>
            </Container>
        </Background>
    )
}
export default Setor;