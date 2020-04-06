import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, Field, } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import { Label } from '../../share_components/global_style';
import { Api } from '../../../share/api';


const FormCategorie = ({ handleSubmit, status }) => {
    const form = useSelector(state => state.form.formCategorie);
    const [sectors, _sectors] = useState([]);

    useEffect(() => {
        let isSubscribe = true;

        const fetchSector = async () => {
            let resp = await Api.get(Api.url.sector, false);
            isSubscribe && resp.data && _sectors(resp.data);
        }

        fetchSector();
        return () => isSubscribe = false;
    }, [])

    return (
        <FormStyle onSubmit={handleSubmit} >
            <Field
                name="id"
                component="input"
                type="hidden" />

            <div className="form-group ">
                <Label>Selecione um setor</Label>
                <Field
                    required
                    name="sector"
                    component="select"
                    className="form-control"
                    placeholder="ex: Alimentação">
                    <option value="" disabled>Selecione um setor</option>
                    {sectors && sectors.map(sector =>
                        <option key={sector._id} value={sector._id}>{sector.title}</option>
                    )}
                </Field>
            </div>

            <div className="form-group ">
                <Label>Digite um nome para categoria:</Label>

                <Field
                    required
                    name="name"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="ex: Acai, Lanchonete, "
                />
            </div>


            <div className="form-group">
                <button disabled={form && form.values
                    && form.values.sector
                    && form.values.name
                    ? false : true}
                    type="submit"
                    className="btn btn-warning btn-block">{status === "store" ? "ADICIONAR" : "EDITAR"}</button>
            </div>
        </FormStyle>
    );

}

export default reduxForm({ form: "formCategorie" })(FormCategorie);