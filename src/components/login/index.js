import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import { action } from '../../store/establishmentAdminRedux';
import { reset } from 'redux-form';
import Load from '../../components/share_components/load';
import { Title } from '../../components/share_components/global_style'
import Center from '../share_components/center';
import Menu from '../share_components/navbar';
import FormEstablishment from './EstablishmentForm';
import { change } from 'redux-form';



const Login = props => {
    const dispatch = useDispatch();
    const [load, _load] = useState(false);
    const [logged, _logged] = useState(false);
    const { response } = useSelector(state => state.response);


    const setDatas = useCallback((data) => {
        const FormName = "formUpdateEstablishment";
        dispatch(change(FormName, "id", data._id));
        dispatch(change(FormName, "name", data.name));
        dispatch(change(FormName, "email", data.email));
        dispatch(change(FormName, "password", data.password));
        dispatch(change(FormName, "new_email", data.email));
        dispatch(change(FormName, "new_password", data.password));        
        dispatch(change(FormName, "delivery", data.delivery));
        dispatch(change(FormName, "hourWork", data.hourWork));
        dispatch(change(FormName, "whatsapp", data.whatsapp));
        dispatch(change(FormName, "social", data.social));
        dispatch(change(FormName, "img", data.img));
        dispatch(change(FormName, "description", data.description));
        _logged(true);
    }, [dispatch])

    useEffect(() => {
        document.body.style.backgroundColor = "#41228e";
        _load(false);

        if (response.from === "estabelecimento" && response.status) {
            const data = response.result;
            setDatas(data)
        }
        
    }, [response, setDatas]);



    const login = credentials => {
        dispatch(action.auth(credentials));
        dispatch(reset('formLogin'));
        _load(true);
    }

    const update = data => {
        dispatch(action.update_auth(data.id, data));
        dispatch(reset('formLogin'));
    }

    return (<div>
        {load && <Load />}
        <Menu logo="https://www.araxasemcorona.com.br/rest/images/upload/0d54ed423d9f714eea918fa2.png" />

        <div style={{ paddingTop: '120px' }}>
            <Center>
                <Title color="white" left="12px" sizeM="30px" size="20px">Alterar informações do estabelecimento</Title>
            </Center>

            <Center>
                {logged
                    && <div className="col-md-8" >
                        <FormEstablishment onSubmit={update} style={{ marginBottom: "80px" }} status="editar" />
                    </div>
                }

                {!logged && <div className="col-md-9">
                    <LoginForm onSubmit={login} />
                </div>}
            </Center>

        </div>



    </div>);
}

export default Login;