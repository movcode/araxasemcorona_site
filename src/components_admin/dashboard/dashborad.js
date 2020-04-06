import React from 'react';
import { Background, Title } from '../share_components/global_style';
import Container from '../share_components/container';
import Menu from '../share_components/navbar_admin';
import Establishments from './list';


const Dashboard = props => {

    const openDialog=(data)=>{
        console.log(data);
    }

    return (
        <Background>
            <Menu />

            <Container >
                <Title>MODERAÇÃO DE ESTABELECIMENTOS</Title>


                <Establishments openDialog={openDialog} className="col-md-2"/>


            </Container>
        </Background>
    )
}
export default Dashboard;