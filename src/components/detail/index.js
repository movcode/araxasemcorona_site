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
    Itens,
    Href,
    HeaderContent,
    Title
} from './style';
import Row from '../../components/share_components/row';
import Center from '../share_components/center';
import { Api } from '../../share/api';


export default props => {
    const location = useLocation();
    const [show, _show] = useState(false);
    const [establishment, _establishment] = useState();
    const textWhats = "Olá, sei que agora é o momento de juntos lutarmos contra a pandemia do coronavirus, e encontrei seu contato no araxasemcorona.com.br. Estou precisando de você, para que eu possa fazer a minha parte e ficar em casa. Pode me ajudar?";

    useEffect(() => {
        const path = location.pathname.split("/");
        const id = path[2] ? path[2] : false;

        const fetch = async () => {
            const resp = await Api.get(`${Api.url.establishment}/${id}`, false);
            resp.data && _establishment(resp.data);
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
                            <BoxFigure className="col-5 col-md-3" >
                                <Figure src={establishment.img} className="img-fluid" />
                            </BoxFigure>

                            <div className="col-7 col-md-9">
                                <HeaderContent>
                                    <Row>
                                        <Title>{establishment.name}</Title>
                                    </Row>

                                    <Row className="col-md-4">
                                        <Itens >
                                            <div><img src="/img/ic_time.png" alt="" /> {establishment.hourWork}</div>
                                        </Itens>
                                        <Itens >
                                            <div><img src="/img/ic_phone.png" alt="" /> {establishment.whatsapp}</div>
                                        </Itens>

                                        <Itens >
                                            {establishment.social &&
                                                <Href href={establishment.social} target="_blank">
                                                    <div><img src={
                                                        establishment.social.indexOf("facebook") > 0 ? "/img/ic_fb.png" : "/img/ic_ing.png"
                                                    } alt="" /> Acessar</div>
                                                </Href>
                                            }

                                        </Itens>
                                    </Row>

                                    <Row>
                                        <Href href={`https://api.whatsapp.com/send?phone=+55` + establishment.whatsapp + `?text=${textWhats}`}
                                            target="_blank"
                                            style={{ marginTop: "20px" }}
                                            className="btn btn-outline-light">Entrar em contato</Href>
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