import React from 'react';
import { Title, BackgroundDeg, BoxDeg } from '../share_components/global_style';

import Center from '../share_components/center';
import Form from './form';


const Contact = props => {

    const sendEmail = contact => console.log(contact);

    return (<BackgroundDeg color="#F5B64A" >
        <BoxDeg>
            <Center>
                <Title color="black" bottom="40px" size="40px">Fale Conosco</Title>
            </Center>

            <Center >
                <div className="col-md-5">
                    <Form onSubmit={sendEmail} />
                </div>
            </Center>
        </BoxDeg>
    </BackgroundDeg>);
}

export default Contact;