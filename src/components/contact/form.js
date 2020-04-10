import React from 'react';
// import { useSelector } from 'react-redux';
import { FormStyle } from '../share_components/global_style';
import { reduxForm, Field } from 'redux-form';

const Form = ({ handleSubmit }) => {
    // const form = useSelector(state => state.form.contactForm);

    return (<FormStyle onSubmit={handleSubmit}>
        <div className="form-group ">
            <Field
                required
                name="name"
                component="input"
                className="form-control"
                type="text"
                placeholder="Nome" />
        </div>
        <div className="form-group ">
            <Field
                required
                name="email"
                component="input"
                className="form-control"
                type="email"
                placeholder="Digite seu email" />
        </div>
        <div className="form-group ">
            <Field
                required
                name="subject"
                component="input"
                className="form-control"
                type="text"
                placeholder="Digite o assunto" />
        </div>
        <div className="form-group ">
            <Field
                required
                name="text"
                component="textarea"
                className="form-control"
                rows="4"
                placeholder="Digite uma mensagem" />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-warning btn-block">ENVIAR</button>
        </div>
    </FormStyle>);

}

export default reduxForm({ form: "contactForm" })(Form);