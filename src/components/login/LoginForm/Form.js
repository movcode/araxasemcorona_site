import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'
import './style.css'


const LoginForm = ({ handleSubmit }) => {
    const form = useSelector(state => state.form.formLogin)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(change('formLogin', 'email', 'teste@gmail.com'));
        dispatch(change('formLogin', 'password', '32'));
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit} className="col-md-4 form-signin" >

            <Field
                name="email"
                component="input"
                type="text"
                className="form-control"
                placeholder="Email"
                required />
            <Field
                name="password"
                component="input"
                type="password"
                className="form-control"
                placeholder="Senha"
                required />

            <button
                className="btn btn-light btn-block"
                type="submit"
                disabled={form
                    && form.values
                    && form.values.email
                    && form.values.password ? false : true}>Entrar</button>

        </form >
    )
}

export default reduxForm({ form: 'formLogin' })(LoginForm)