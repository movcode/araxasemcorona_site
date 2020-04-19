import React, { useState, useEffect } from 'react';
import { Api} from '../../../share/api';
import { BoxItens,Row ,Href} from './style';
import Carousel from '../../../components/share_components/carousel';



export default props => {
    const [deliverymans, _deliverymans] = useState([]);
    const textWhats = "Olá, sei que agora é o momento de juntos lutarmos contra a pandemia do coronavirus, e encontrei seu contato no araxasemcorona.com.br. Estou precisando de você, para que eu possa fazer a minha parte e ficar em casa. Pode me ajudar?";

    useEffect(() => {

        const fetch = async () => {
            const resp = await Api.get(Api.url.deliverymans, false);
            resp.data && _deliverymans(resp.data);
        }

        fetch();

    }, []);

    return (<Carousel pages={4}>
        {deliverymans.map(delivery =>
            <BoxItens key={delivery._id}>
                <Row> {delivery.name} </Row>
                <Row> 
                    <Href target="_blank" href={`https://api.whatsapp.com/send?phone=+55` + delivery.whatsapp + `&text=${textWhats}`}>
                        <button className="btn btn-block btn-danger">Conversar</button>
                    </Href>
                </Row>
            </BoxItens>
        )}

    </Carousel>);
}