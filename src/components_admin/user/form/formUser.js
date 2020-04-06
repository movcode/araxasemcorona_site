import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import { Label } from '../../share_components/global_style';

const FormSector = ({ handleSubmit , status}) => {
    const form = useSelector(state => state.form.formUser);        
   
    return (
        <FormStyle onSubmit={handleSubmit} >
            <Field
                name="id"
                component="input"
                type="hidden" />
            

            <div className="form-group ">
                <Label>Nome:</Label>
                <Field
                    required
                    name="name"
                    component="input"
                    className="form-control"
                    type="text"                    
                />
            </div>

        
            <div className="form-group ">
                <Label>Email:</Label>
                <Field
                    required
                    name="email"
                    component="input"
                    className="form-control"
                    type="email"                    
                />
            </div>
            <div className="form-group ">
                <Label>Senha:</Label>
                <Field
                    required
                    name="password"
                    component="input"
                    className="form-control"
                    type="password"                    
                />
            </div>

            <div className="form-group">
                <button disabled={form && form.values
                    && form.values.name
                    && form.values.email
                    && form.values.password
                    ? false : true}
                    type="submit"
                    className="btn btn-warning btn-block">Adicionar</button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formUser" })(FormSector);