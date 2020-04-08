import React from 'react';
import { Background } from '../share_components/global_style';
import { Text, Title } from '../share_components/global_style';
import { BoxHow, BoxItem, Img } from './style';
import Center from '../share_components/center';
import Row from '../share_components/row';
import Container from '../share_components/Container';


const About = ({ text }) =>
    <Background bg="white">
        <Container >
            <Row >
                <div className="col-md-6">
                    <Title bottom="40px" >Sobre</Title>
                    <Text color="black">{text}</Text>
                </div>

                <div className="col-md-6">
                    <img src="/img/about.png" alt="" className="img-fluid float-right" />
                </div>
            </Row>


            <div className="col-md-12 col-12">
                <Title top="80px" size="30px" sizeM="25px">Como funciona ?</Title>
            </div>

            <Row>

                <BoxHow className="col-md-3">
                    <BoxItem >
                        <Img src="/img/market.png" />
                        <Center>
                            <Title color="#fff" bottom="20px" size="20px" sizeM="30px">COMERCIANTES </Title>
                        </Center>
                        <Text color="white" padding="20px">Comerciantes e autônomos cadastram de forma gratutíta o seu negocio em nossa plataforma.</Text>
                    </BoxItem>
                </BoxHow>

                <BoxHow className="col-md-3">
                    <BoxItem >
                        <Img src="/img/delivery.png" />
                        <Center>
                            <Title color="#fff" bottom="20px" size="20px" sizeM="30px">ENTREGADORES </Title>
                        </Center>
                        <Text color="white" padding="20px">
                            Entregadores cadastram suas informações em nossa plataforma de forma gratuíta.
                    </Text>
                    </BoxItem>
                </BoxHow>
                <BoxHow className="col-md-3">
                    <BoxItem>
                        <Img src="/img/plataform.png" />
                        <Center>
                            <Title color="#fff" bottom="20px" size="20px" sizeM="30px">PLATAFORMA </Title>
                        </Center>
                        <Text color="white" padding="20px" >
                            Através da nossa plataforma indicamos os entregadores para os comerciantes que trabalham com delivery.
                    </Text>

                    </BoxItem>
                </BoxHow>
                <BoxHow className="col-md-3">
                    <BoxItem>
                        <Img src="/img/clientes.png" />
                        <Center>
                            <Title color="#fff" bottom="20px" size="20px" sizeM="30px">CONSUMIDORES </Title>
                        </Center>
                        <Text color="white" padding="20px">
                            Consumidores acessam nossa plataforma, entra em contato com o estabelecimento selecionado e realiza o pedido sem sair de casa.
                    </Text>
                    </BoxItem>
                </BoxHow>

            </Row>
        </Container>
    </Background>

export default About;