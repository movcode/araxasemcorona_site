import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from '../../share_components/global_style';
import { reduxForm, Field } from 'redux-form';
import { FormStyle } from './style';
import { Row } from 'react-bootstrap';
import MaskInput from '../../../share/maskinput';



const Form = ({ handleSubmit }) => {
    const form = useSelector(state => state.form.formDelivery);

    return (
        <FormStyle onSubmit={handleSubmit} >


            <Title font="Helvetica" align="center" color="black" bottom="30px" size="30px" sizeM="25px">Formulário entregador</Title>
            <div className="form-group ">
                <Field
                    required
                    name="name"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="Digite o seu nome completo" />
            </div>

            <Row>
                <div className="form-group col-md-6">

                    <Field
                        required
                        name="email"
                        component="input"
                        className="form-control"
                        type="email"
                        placeholder="Digite o seu email" />
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

            <div className="form-group ">
                <Field
                    required
                    name="address"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="Digite o seu endereço" />
            </div>

            <Row>
                <div className="form-group col-md-6">
                    <Field
                        required
                        name="numberBoard"
                        component="input"
                        className="form-control"
                        type="text"
                        placeholder="N° da placa do seu veículo" />
                </div>
                <div className="form-group col-md-6">
                    <Field
                        required
                        name="cnh"
                        component="input"
                        className="form-control"
                        type="text"
                        placeholder="CNH" />
                </div>
            </Row>

            <Row>
                <div className="form-group col-md-6">
                    <Field
                        name="veichle"
                        required
                        className="form-control"
                        component="select">
                        <option value="" disabled>Selecione o tipo de veículo</option>
                        <option value="Moto" >Moto</option>
                        <option value="Carro">Carro</option>
                        <option value="Bicicleta">Bicicleta</option>
                    </Field>
                </div>

                <div className="form-group col-md-6">
                    
                    <Field
                        name="hourWork"
                        
                        className="form-control"
                        component="input"
                        type="text" 
                        placeholder="Horário de funcionamento"/>
                </div>
            </Row>


            <div className="form-group">
                <label>Digite o seu WhatsApp:</label>
                <Field name="whatsapp"
                    className="form-control"
                    placeholder="Digite aqui o número do seu Whatsapp"
                    component="input"
                    text="text"
                    {...MaskInput.phone}
                />
            </div>


            <div className="form-group">
                <button disabled={form && form.values
                    && form.values.name
                    && form.values.email
                    && form.values.password
                    && form.values.address
                    && form.values.numberBoard
                    && form.values.cnh
                    && form.values.veichle
                    && form.values.hourWork
                    && form.values.whatsapp
                    ? false : true} type="submit" className="btn btn-warning btn-block">CADASTRAR</button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formDelivery" })(Form);