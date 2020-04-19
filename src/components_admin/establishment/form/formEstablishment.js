import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import { Label } from '../../share_components/global_style';
import { Row } from 'react-bootstrap';
import MaskInput from '../../../share/maskinput';
import Upload from '../../../share/upload';
import { Api } from '../../../share/api';


const Form = ({ handleSubmit, status }) => {
    const form = useSelector(state => state.form.formEstablishmentAdmin);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [imgUpload, _imgUpload] = useState(false);
    const [categories, _categories] = useState(false);
    const [sectors, _sectors] = useState(false);

    useEffect(() => {
        if (response.status && response.from === "upload") {
            const img = response.result.img;
            dispatch(change('formEstablishmentAdmin', 'img', img))
            _imgUpload(img);
        }
    }, [response, dispatch]);

    //Fetch Sectors   
    useEffect(() => {
        let isSubscribe = true;
        const fetch = async () => {
            let resp = await Api.get(Api.url.sector, false);
            isSubscribe && resp.data && _sectors(resp.data);
        }
        fetch();
        return () => isSubscribe = false;
    }, [])


    const filterCategorie = useCallback(id => sectors && sectors
        .filter(s => s._id === id)
        .map(s => _categories(s.categories)
        ), [sectors]);


    useEffect(() => {

        if (status === "editar" && form && form.values
            && form.values.sector) {
            const id = form.values.sector;

            filterCategorie(id);
        }

    }, [status, form, filterCategorie]);


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
                type="hidden" />
            <Field
                name="password"
                component="input"
                type="hidden" />

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
                    <Field name="sector"
                        required
                        className="form-control"
                        onChange={(e) => filterCategorie(e.target.value)}
                        component="select">
                        <option value="" disabled >Selecione o seu setor</option>
                        {sectors && sectors.map(sector =>
                            <option key={sector._id} value={sector._id}>{sector.title}</option>
                        )}
                    </Field>
                </div>

                <div className="form-group col-md-6">
                    <Field name="categorie"
                        required
                        className="form-control"
                        component="select">
                        <option value="" disabled >Selecione uma categoria </option>
                        {categories && categories.map(c =>
                            <option key={c._id} value={c._id}>{c.name}</option>
                        )}

                    </Field>
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
                    <Label>Digite o seu Telefone:</Label>
                    <Field name="phone"
                        className="form-control"
                        placeholder="Digite aqui o número do seu Telefone"
                        component="input"
                        text="text"
                        {...MaskInput.phone}
                    />
                </div>
                <div className="form-group col-md-6">
                    <Label>Digite o seu WhatsApp:</Label>
                    <Field name="whatsapp"
                        className="form-control"
                        placeholder="Digite aqui o número do seu Whatsapp"
                        component="input"
                        text="text"
                        {...MaskInput.whats}
                    />
                </div>

            </Row>
            <div className="form-group">
                <Label>Instagram ou Face:</Label>
                <Field name="social"
                    className="form-control"
                    placeholder="Digite aqui o seu Instagram ou FB"
                    component="input"
                    text="text"
                />
            </div>
            <div className="form-group">
                <Upload mTop="20" title="Seleciona a marca do estabelecimento" img={imgUpload} />
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
                        && form.values.sector
                        && form.values.categorie
                        && form.values.hourWork
                        && form.values.whatsapp
                        && form.values.description ? false : true}
                    type="submit" className="btn btn-warning btn-block">
                    {status === "editar" ? "EDITAR" : "CADASTRAR"}
                </button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formEstablishmentAdmin" })(Form);