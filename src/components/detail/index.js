import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BoxShare from './boxShare';
import {
    BoxDetail,
    Menu,
    Container,
    Close,
    Header,
    BoxFigure,
    Figure,
    Itens,
    Href,
    Title,
    Icon,
    ButtonShare,
    Description
} from './style';

import Row from '../../components/share_components/row';
import Center from '../../components/share_components/center';
import { Api } from '../../share/api';


export default props => {
    const location = useLocation();
    const [establishment, _establishment] = useState();
    const [showShare, _showShare] = useState(false);
    const textWhats = "Olá, sei que agora é o momento de juntos lutarmos contra a pandemia do coronavirus, e encontrei seu contato no araxasemcorona.com.br. Estou precisando de você, para que eu possa fazer a minha parte e ficar em casa. Pode me ajudar?";

    useEffect(() => {
        document.body.style.backgroundColor = "#41228e";
        const path = location.pathname.split("/");
        const id = path[2] ? path[2] : false;

        const fetch = async () => {
            const resp = await Api.get(`${Api.url.establishment}/${id}`, false);
            resp.data && _establishment(resp.data);
        }
        fetch();
    }, [location]);

    const handleBoxShare = status => _showShare(status);

    return (
        <BoxDetail>
            {showShare && <BoxShare handle={handleBoxShare} />}

            <Menu>
                <Row>
                    <Link to="/" className="col-md-12">
                        <Center>
                            <img src="https://www.araxasemcorona.com.br/rest/images/logo_default.png" className="img-fluid" alt="logo" />
                        </Center>
                    </Link>
                    <Close>
                        <Link to="/estabelecimentos" >
                            <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
                        </Link>
                    </Close>
                </Row>
            </Menu>



            {establishment &&
                <Container className="container">
                    <Header >
                        <Row >
                            <BoxFigure className="col-5 col-md-2" >
                                <Figure src={establishment.img} className="img-fluid" />

                                {establishment.whatsapp &&
                                    <Href href={`https://api.whatsapp.com/send?phone=+55` + establishment.whatsapp + `&text=${textWhats}`}
                                        target="_blank"
                                        style={{ marginTop: "20px" }}
                                        className="btn btn-outline-light btn-block">Entrar em contato</Href>
                                }
                            </BoxFigure>

                            <div className="col-7 col-md-9">
                                <Row>
                                    <Title>{establishment.name}</Title>
                                </Row>

                                <Row className="col-md-4">
                                    <Itens >
                                        <Icon className="ti-time" />{establishment.hourWork}
                                    </Itens>

                                    {establishment.phone &&
                                        <Itens >
                                            <Icon className="ti-headphone-alt" />{establishment.whatsapp}
                                        </Itens>
                                    }

                                    <Itens >
                                        {establishment.social &&
                                            <Href href={establishment.social} target="_blank">
                                                <Icon className={establishment.social.indexOf("facebook") > 0 ? "ti-facebook" : "ti-instagram"} />
                                            Acessar
                                        </Href>
                                        }
                                    </Itens>
                                    <Itens >
                                        <ButtonShare onClick={() => handleBoxShare(true)}>
                                            <Icon className="ti-sharethis" />
                                            Compartilhar
                                        </ButtonShare>
                                    </Itens>
                                </Row>
                            </div>
                        </Row>
                    </Header>


                    <Description>
                        {establishment.description}
                    </Description>



                </Container>

            }
        </BoxDetail>
    );

}