import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import { action } from '../../store/loginRedux';
import { reset } from 'redux-form';
import Load from '../../components/share_components/load';
import { Background, Title } from '../../components/share_components/global_style'
import { StorageKeys } from '../../share/api';
import { useHistory } from 'react-router-dom';
import Center from '../share_components/center';
import Container from '../../components/share_components/Container';
import Menu from '../share_components/navbar';


const Login = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [load, _load] = useState(false);
    const { response } = useSelector(state => state.response);


    useEffect(() => {
        if (response.from === "login") {
            const { from, status, result } = response;

            from === "login" && _load(false);

            if (status) {
                const { token, user } = result;
                localStorage.setItem(StorageKeys.token, token);
                localStorage.setItem(StorageKeys.name_user, user.name);
                history.push("dash/");
            } else {
                alert("usuario ou senha incorreto")
            }
        }

    }, [response, history]);


    const login = credentials => {
        dispatch(action.auth(credentials));
        dispatch(reset('formLogin'));
        _load(true);
    }


    return (<>
        {load && <Load />}
        <Background style={{ height: "100vh" }}>
            <Menu logo="https://firebasestorage.googleapis.com/v0/b/araxasemcorona.appspot.com/o/26e8edb203d1e4e05c5a9b8252586e7d.png?alt=media&token=a50403ec-15b9-450a-b9e1-444e4b435969"/>
            <Container style={{ marginTop: "10px" }}>
                <Center>
                    <Title color="white" left="12px" sizeM="30px" size="20px">Alterar informações do estabelecimento</Title>
                </Center>
                <LoginForm onSubmit={login} />
                <LoginForm />
            </Container>
        </Background>

    </>);
}

export default Login;