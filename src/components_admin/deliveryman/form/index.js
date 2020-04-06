import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import MaskInput from '../../../share/maskinput';
import { Row } from 'react-bootstrap';
import { Label } from '../../share_components/global_style';


const FormDelivery = ({ handleSubmit, status }) => {
    const form = useSelector(state => state.form.formDeliveryAdmin);
    return (
        <FormStyle onSubmit={handleSubmit} >

            <Field               
                name="id"
                component="input"                
                type="hidden"
                />

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
                        name="email"
                        component="input"
                        className="form-control"
                        type="email"
                        placeholder="Digite o seu email" />
                </div>
                <div className="form-group col-md-6">

                    <Field
                        
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
                        placeholder="Horário de funcionamento" />
                </div>
            </Row>


            <div className="form-group">
                <Label>Digite o seu WhatsApp:</Label>
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
                    && form.values.address
                    && form.values.numberBoard
                    && form.values.cnh
                    && form.values.veichle
                    && form.values.hourWork
                    && form.values.whatsapp
                    ? false : true} type="submit" className="btn btn-warning btn-block">
                        {status === "editar" ? "EDITAR": "ADICIONAR"}
                    </button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formDeliveryAdmin" })(FormDelivery);