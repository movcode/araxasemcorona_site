import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Text, BackgroundDeg, BoxDeg, Bold } from '../share_components/global_style';
import Center from '../share_components/center';
import { FormEstablishment, FormDelivery } from './forms';
import Row from '../share_components/row';
import { BoxButton, BorderBox, Button } from './style';
import { action as actionEstablishment } from '../../store/establishmentAdminRedux';
import { action as actionDelivery } from '../../store/establishmentAdminRedux';
import Container from '../share_components/Container';


const Registry = ({sectors}) => {
    const [userType, _userType] = useState(1);
    const dispatch = useDispatch();

    const addEstablishment = data => dispatch(actionEstablishment.store(data));

    const addDeliveryman = data => dispatch(actionDelivery.store(data));

    return (<BackgroundDeg bottom="120">
        <BoxDeg>
            <Container>
                <Row>
                    <div className="col-md-4" >
                        <Title color="white" bottom="60px" size="60px">Cadastro</Title>
                        <Center>
                            <Text>
                                Agora é o momento de você ajudar a nossa cidade é ainda alavancar o seu negócio neste momento tão díficil.
                            <br />
                                <br />
                            Para você que trabalha com delivery em seu negócio, iremos publicar <Bold>gratuitamente</Bold> o seu estabelecimento em nossa paltaforma .
                            <br />E para vocês entregadores iremos indicar o seu trabalho para os estabelecimentos cadastrados aqui.
                        </Text>
                        </Center>
                    </div>

                    <div className="col-md-8">
                        <BorderBox className="col-md-12">
                            <Row>
                                <BoxButton className="col-6 col-md-6" >
                                    <Button
                                        onClick={() => _userType(1)}
                                        active={userType}>SOU COMERCIANTE</Button>
                                </BoxButton>

                                <BoxButton className="col-6 col-md-6">
                                    <Button
                                        onClick={() => _userType(0)}
                                        active={userType === 0 ? 1 : 0}>SOU ENTREGADOR</Button>
                                </BoxButton>
                            </Row>

                        </BorderBox>

                        {userType === 1
                            ? <FormEstablishment sectors={sectors} onSubmit={addEstablishment} />
                            : <FormDelivery onSubmit={addDeliveryman} />}
                    </div>

                </Row>
            </Container>
        </BoxDeg>
    </BackgroundDeg>);
}

export default Registry;