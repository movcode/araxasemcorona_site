import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../store/contactRedux';
import { reset } from 'redux-form';
import { Title, BackgroundDeg, BoxDeg, Href } from '../share_components/global_style';
import Center from '../share_components/center';
import Form from './form';
import Load from '../../components/share_components/load';

const Contact = props => {
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [load, _load] = useState(false);


    useEffect(() => {
        response.from === "contato" && _load(false);
    }, [response])

    const sendEmail = contact => {
        dispatch(action.send(contact));
        dispatch(reset('contactForm'));
        _load(true);
    }

    return (<BackgroundDeg color="#F5B64A" >
        {load && <Load />}
        <BoxDeg>
            <Center>
                <Title color="black" bottom="40px" sizeM="30px" size="40px">Fale Conosco</Title>
            </Center>

            <Center >
                <div className="col-md-5">
                    <Form onSubmit={sendEmail} />
                </div>
            </Center>


            <Center top="20px" bottom="40px">
                <a href="https://www.facebook.com/buganicomunicacao/">
                    <img width="80" src="/img/bugani.svg" alt="logo bugani" />
                </a>
            </Center>
            <Center bottom="80px">
                <Href color="black" target="_blank" href="https://www.facebook.com/araxasemcorona" style={{ fontSize: '25px', marginRight: '10px' }} className="ti-facebook"></Href>
                <Href color="black" target="_blank" href="https://www.instagram.com/araxasemcorona/" style={{ fontSize: '25px' }} className="ti-instagram"></Href>
            </Center>

        </BoxDeg>
    </BackgroundDeg>);
}

export default Contact;