import React from 'react'
import { useDispatch } from 'react-redux';
import { LinkStyle } from './style';
import { Nav, } from 'react-bootstrap';
import PATH_ADMIN from '../../../routes/path_admin';
import { action } from '../../../store/responseSagaRedux';


export default props => {
    const dispatch = useDispatch();
    const clearReducer = () => dispatch(action.clear());

    return (<Nav className="mr-auto">
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "dash"}>Home </LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "setor"}>Setor</LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "categoria"}>Categorias</LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "estabelecimento"}>Estabelecimentos</LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "entregador"}>Entregadores</LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "config"}>Configuração do site</LinkStyle>
        <LinkStyle onClick={clearReducer} to={PATH_ADMIN + "usuario"} >Usuários</LinkStyle>
    </Nav>);
}
