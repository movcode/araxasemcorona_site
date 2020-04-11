import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import { FormStyle } from '../../../components/share_components/global_style';
import { Label } from '../../share_components/global_style';
import { Api } from '../../../share/api';
import { CircularImage } from '../../../components/share_components/global_style'
import Row from '../../../components/share_components/row'
import Upload from '../../../share/upload'


const FormSector = ({ handleSubmit, status }) => {
    const form = useSelector(state => state.form.formSector);
    const { response } = useSelector(state => state.response);
    const dispatch = useDispatch();
    const [listIcons, _listIcons] = useState([]);
    const [iconSelected, _iconSelected] = useState([]);

    useEffect(() => {
        let isSubscribe = true;
        const fetchIcons = async () => {
            const resp = await Api.get(Api.url.icons_sectors, false);
            resp.data && isSubscribe && _listIcons(resp.data);
        }
        console.log("ok");
        fetchIcons();
        return () => isSubscribe = false;
    }, [response])



    const selectIcon = (i, icon) => {
        _iconSelected(i);
        dispatch(change("formSector", "icon", icon));
    }
    return (
        <FormStyle onSubmit={handleSubmit} >
            <Field
                name="id"
                component="input"
                type="hidden" />
            <Field
                name="icon"
                component="input"
                type="hidden" />



            <div className="form-group ">
                <Label>Digite um setor:</Label>
                <Field
                    required
                    name="title"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="ex: Alimentação"
                />
            </div>


            <div className="form-group">
                <Label>Selecione um icon:</Label>
                <Row>
                    {
                        listIcons
                        && listIcons.map((icon, i) =>
                            <CircularImage key={i} bg={Api.url.base + icon}
                                op={iconSelected === i ? 1 : 0}
                                onClick={() => selectIcon(i, Api.url.base + icon)}
                            />
                        )
                    }
                </Row>
            </div>

            <div className="form-group">
                <button disabled={form && form.values
                    && form.values.title
                    && form.values.icon
                    ? false : true}
                    type="submit"
                    className="btn btn-warning btn-block">{status === "store" ? "ADICIONAR" : "EDITAR"}</button>
            </div>
            <Upload title="Adicionar um novo icon na coleção" icon />

        </FormStyle>
    );

}

export default reduxForm({ form: "formSector" })(FormSector);