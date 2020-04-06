import React from 'react';

import { DetailBox, Header, BoxFigure, Figure, HeaderContent, Title } from './style';

import { Row } from 'react-bootstrap';

export default ({ data }) => {

    return (
        <DetailBox id="detailbox">
            <Header>
                <Row >
                    {data.img &&
                        <BoxFigure className="col-3 col-md-3" >
                            <Figure src={data.img} className="img-fluid" />
                        </BoxFigure>
                    }


                    <div className="col-9 col-md-9">
                        <HeaderContent>
                            <Row>
                                <Title>
                                    {data.name}
                                </Title>
                            </Row>
                            <Row>
                                <div>{data.hourWork}</div>
                            </Row>
                            <Row>
                                <div >WhatsApp: {data.whatsapp}</div>
                            </Row>
                            <Row>
                                <a href="/#" style={{ marginTop: "20px" }}
                                    className="btn btn-primary">Entrar em contato</a>
                            </Row>

                        </HeaderContent>
                    </div>
                </Row>
            </Header>
            <Row>
                {data.description}
            </Row>
        </DetailBox>
    );

}