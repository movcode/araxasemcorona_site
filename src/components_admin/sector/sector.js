import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, change } from 'redux-form';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Row from '../../components/share_components/row'
import FormSector from './form';
import ListSector from './list';
import { action } from '../../store/sectorRedux';
import Center from '../../components/share_components/center';

const Setor = props => {
    const dispatch = useDispatch();

    const [storeOrEdit, _storeOrEdit] = useState("store");


    const store = (sector) => {
        storeOrEdit !== "editar"
            ? dispatch(action.store(sector))
            : dispatch(action.update(sector.id, sector));

        dispatch(reset('formSector'));
    }

    const remove = data => dispatch(action.remove(data._id));

    const editForm = data => {
        dispatch(change("formSector", "id", data._id));
        dispatch(change("formSector", "icon", data.icon));
        dispatch(change("formSector", "title", data.title));
        _storeOrEdit("editar");
    }

    return (
        <Background>
            <Menu />

            <Container>
                <Title>SETORES</Title>
                <Center bottom="20px">Obs: Ao deletar o setor todoas as seuas respectivas categórias serão afetados</Center>
                <Row>
                    <div className="col-md-6">
                        <FormSector onSubmit={store} status={storeOrEdit} />
                    </div>
                    <div className="col-md-6">
                        <ListSector  remove={remove} edit={editForm} />
                    </div>
                </Row>
            </Container>
        </Background>
    )
}
export default Setor;