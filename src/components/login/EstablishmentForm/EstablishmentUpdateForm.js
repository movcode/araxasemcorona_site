import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import { Label } from '../../../components_admin/share_components/global_style';
import { Row } from 'react-bootstrap';
import MaskInput from '../../../share/maskinput';
import Upload from '../../../share/upload';


const Form = ({ handleSubmit }) => {
    const form = useSelector(state => state.form.formUpdateEstablishment);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [imgUpload, _imgUpload] = useState(false);


    useEffect(() => {
        if (response.status && response.from === "upload") {
            const img = response.result.img;
            dispatch(change('formUpdateEstablishment', 'img', img))
            _imgUpload(img);
        }
    }, [response, dispatch]);






    return (
        <FormStyle onSubmit={handleSubmit} >
            <Field
                name="id"
                component="input"
                type="hidden" />

            <Field
                name="img"
                component="input"
                type="hidden" />

            <Field
                name="delivery"
                component="input"
                type="hidden"
                value="false" />
            <Field
                name="email"
                component="input"
                type="hidden"
                value="false" />
            <Field
                name="password"
                component="input"
                type="hidden"
                value="false" />

            <div className="form-group ">
                <Field
                    required
                    name="name"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="Digite o nome do  estabelecimento" />
            </div>

            <Row>
                <div className="form-group col-md-6">
                    <Label>Usuário</Label>
                    <Field
                        required
                        name="new_email"
                        component="input"
                        className="form-control"
                        type="text"
                        placeholder="Digite um usuário para este estabelecimento" />
                </div>
                <div className="form-group col-md-6">
                    <Label>Senha</Label>
                    <Field
                        required
                        name="new_password"
                        component="input"
                        className="form-control"
                        type="password"
                        placeholder="Digite uma senha" />
                </div>
            </Row>

            <Row>
                <div className="form-group col-md-6">

                    <Field name="delivery"
                        required
                        className="form-control"
                        component="select">
                        <option value="" disabled>Trabalha com entregas ?</option>
                        <option value="true" >Sim</option>
                        <option value="false">Não</option>
                    </Field>
                </div>

                <div className="form-group col-md-6">
                    <Field name="hourWork"
                        required
                        className="form-control"
                        component="input"
                        type="text"
                        placeholder="Horário de funcionamento"
                    />
                </div>
            </Row>


            <Row>
                <div className="form-group col-md-6">
                    <Label>Digite o seu WhatsApp:</Label>
                    <Field name="whatsapp"
                        required
                        className="form-control"
                        placeholder="Digite aqui o número do seu Whatsapp"
                        component="input"
                        text="text"
                        {...MaskInput.phone}
                    />
                </div>
                <div className="form-group col-md-6">
                    <Label>Instagram ou Face:</Label>
                    <Field name="social"
                        className="form-control"
                        placeholder="Digite aqui o seu Instagram ou FB"
                        component="input"
                        text="text"
                    />
                </div>
            </Row>
            <div className="form-group">
                <Upload mTop="20" title="Seleciona a marca do estabelecimento" img={
                    !imgUpload
                        ? form && form.values ? form.values.img : null
                        : imgUpload
                } />
            </div>


            <div className="form-group">
                <Field name="description"
                    required
                    className="form-control"
                    placeholder="Descreva sobre o negócio"
                    component="textarea"
                    rows="2" />
            </div>


            <div className="form-group">
                <button

                    disabled={form
                        && form.values
                        && form.values.name
                        && form.values.email
                        && form.values.hourWork
                        && form.values.whatsapp
                        && form.values.img
                        && form.values.description ? false : true}
                    type="submit" className="btn btn-warning btn-block">
                    EDITAR
                </button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formUpdateEstablishment" })(Form);