import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from '../../share_components/global_style';
import { reduxForm, Field, change } from 'redux-form';
import { FormStyle } from './style';
import { Row } from 'react-bootstrap';
import MaskInput from '../../../share/maskinput';
import Upload from '../../../share/upload';


const Form = ({ handleSubmit, sectors }) => {
    const form = useSelector(state => state.form.formEstablishment);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [categories, _categories] = useState(false);
    const [imgUpload, _imgUpload] = useState(false);

    useEffect(() => {
        if (response.status && response.from === "upload") {
            const img = response.result.img;
            dispatch(change('formEstablishment', 'img', img))
            _imgUpload(img);
        }
    }, [response, dispatch]);


    const filter = id => sectors.filter(sector => sector._id === id && _categories(sector.categories));

    return (
        <FormStyle onSubmit={handleSubmit} >
            <Field
                name="img"
                component="input"
                type="hidden" />

            <Title font="Helvetica" align="center" color="black" bottom="30px" size="30px" sizeM="25px">Formulário estabelecimento</Title>

            <div className="form-group ">

                <Field
                    required
                    name="name"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="Digite o nome do seu estabelecimento" />
            </div>

            <Row>
                <div className="form-group col-md-6">

                    <Field
                        required
                        name="email"
                        component="input"
                        className="form-control"
                        type="email"
                        placeholder="Digite seu email" />
                </div>
                <div className="form-group col-md-6">

                    <Field
                        required
                        name="password"
                        component="input"
                        className="form-control"
                        type="password"
                        placeholder="Digite uma senha" />
                </div>
            </Row>

            <Row>
                <div className="form-group col-md-6">
                    <Field
                        onChange={(e) => filter(e.target.value)}
                        name="sector"
                        required
                        className="form-control"
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
                        {categories && categories.map(categorie =>
                            <option key={categorie._id} value={categorie._id}>{categorie.name}</option>
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
                    <label style={{ color: "#000" }}>Digite o seu WhatsApp:</label>
                    <Field name="whatsapp"
                        className="form-control"
                        placeholder="Digite aqui o número do seu Whatsapp"
                        component="input"
                        text="text"
                        {...MaskInput.phone}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label style={{ color: "#000" }}>Instagram ou Facebook:</label>
                    <Field name="social"
                        className="form-control"
                        placeholder="Cole o link do seu Instagram ou Facebook"
                        component="input"
                        text="text"
                    />
                </div>
            </Row>
            <div className="form-group">
            <Upload mTop="20" title="Insira a marca do seu negócio clicando aqui" img={imgUpload} />
            </div>



            <div className="form-group">
                <Field name="description"
                    required                    
                    className="form-control"
                    placeholder="Descreva  sobre o seu negócio, informações sobre os seus produtos e seus diferenciais de atendimento."
                    component="textarea"
                    rows="3" />
            </div>


            <div className="form-group">
                <button disabled={form && form.values
                    && form.values.name
                    && form.values.email
                    && form.values.sector
                    && form.values.categorie
                    && form.values.delivery
                    && form.values.hourWork
                    && form.values.whatsapp
                    && form.values.description ? false : true} type="submit" className="btn btn-warning btn-block">CADASTRAR</button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formEstablishment" })(Form);