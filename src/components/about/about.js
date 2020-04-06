import React from 'react';
import { Background, Box } from '../share_components/global_style';
import { Text, Title } from '../share_components/global_style';
import { BoxHow, BoxItem, Img } from './style';
import Center from '../share_components/center';
import Row from '../share_components/row';


const About = (props) =>
    <Background bg="white">

        <Box bottom="80px">
            <div className="container" >

                <Row >
                    <div className="col-md-6">
                        <Title  bottom="40px" >Sobre</Title>
                        <Text color="black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
                    </div>

                    <div className="col-md-6">
                        <img src="/img/about.png" alt="" className="img-fluid float-right" />
                    </div>
                </Row>


                <Title top="80px" size="30px" sizeM="30">Como funciona ?</Title>

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
            </div>
        </Box>
    </Background>

export default About;