import React from 'react'
import { useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import './style.css'


const LoginForm = ({ handleSubmit }) => {
    const form = useSelector(state => state.form.formLogin)

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