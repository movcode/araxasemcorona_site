import React, { useState } from 'react';
import { Title, BackgroundDeg, BoxDeg } from '../share_components/global_style';
import Center from '../share_components/center';
import { BoxButton, BorderBox, Button } from '../registry/style';
import Container from '../share_components/Container';
import { Row, Accordion, Card } from 'react-bootstrap';
import { Api } from '../../share/api';
import './style.css';





export default (props) => {
    const [userType, _userType] = useState(1);

    return (<BackgroundDeg color="#FFF" >
        <BoxDeg>
            <Center>
                <Title color="black" bottom="40px" sizeM="30px" size="40px">NOTÍCIAS</Title>
            </Center>

            <Center >
                <Container>
                    <BorderBox className="col-md-12">
                        <Row>
                            <BoxButton className="col-6 col-md-6" >
                                <Button
                                    onClick={() => _userType(1)}
                                    active={userType}>NOTÍCIAS DE ARAXÁ</Button>
                            </BoxButton>

                            <BoxButton className="col-6 col-md-6">
                                <Button
                                    onClick={() => _userType(0)}
                                    active={userType === 0 ? 1 : 0}>NOTÍCIAS DO BRASIL</Button>
                            </BoxButton>
                        </Row>
                    </BorderBox>

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" >
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body color="black">Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                </Container>
            </Center>
        </BoxDeg>
    </BackgroundDeg>);
}