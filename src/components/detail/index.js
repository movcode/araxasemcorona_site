import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
    Close,
    DetailBox,
    Container,
    Header,
    BoxFigure,
    Figure,
    Href,
    HeaderContent,
    Title
} from './style';
import { Row } from 'react-bootstrap';
import Center from '../share_components/center';
import { Api } from '../../share/api';


export default props => {
    const location = useLocation();
    const [show, _show] = useState(false);
    const [establishment, _establishment] = useState();


    useEffect(() => {
        const path = location.pathname.split("/");
        const id = path[2] ? path[2] : false;

        const fetch = async () => {
            const resp = await Api.get(`${Api.url.establishment}/${id}`, false);
            resp.data && _establishment(resp.data);
            console.log(resp.data);
        }

        if (id && !show) {
            fetch();
            _show(true)
        }
    }, [location, show]);

    return (
        <DetailBox active={show ? 1 : 0}>
            <Close>
                <Link onClick={() => _show(false)} to="/estabelecimentos" >
                    <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
                </Link>
            </Close>

            {establishment &&
                <Container className="container">
                    <Header>
                        <Row >

                            <BoxFigure className="col-3 col-md-3" >
                                <Figure src={establishment.img} className="img-fluid" />
                            </BoxFigure>



                            <div className="col-9 col-md-9">
                                <HeaderContent>
                                    <Row>
                                        <Title>{establishment.name}</Title>
                                    </Row>
                                    <Row>
                                        <div><img src="/img/ic_time.png" alt="" /> {establishment.hourWork}</div>
                                    </Row>
                                    <br />
                                    <Row>
                                        <div><img src="/img/ic_phone.png" alt="" /> {establishment.whatsapp}</div>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Href href="/#"><div><img src="/img/ic_ing.png" alt="" /> Acessar</div></Href>
                                    </Row>
                                    <Row>
                                        <a href={`https://api.whatsapp.com/send?phone=+55`+establishment.whatsapp} style={{ marginTop: "20px" }}
                                            className="btn btn-outline-light">Entrar em contato</a>
                                    </Row>

                                </HeaderContent>
                            </div>
                        </Row>
                    </Header>

                    <Center>
                        {establishment.description}
                </Center>


                </Container>

            }
        </DetailBox>
    );

}