import React from 'react';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Edit from './edit';

const Config = props => {

    return (
        <Background>
            <Menu />

            <Container>
                <Title>CONFIGURAÇÃO DO SITE</Title>
                <Edit />
                <br />
            </Container>
        </Background>
    )
}
export default Config;