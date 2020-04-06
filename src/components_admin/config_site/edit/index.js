import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Upload from '../../../share/upload';
import { Api } from '../../../share/api';
import Center from '../../../components/share_components/center';
import { action } from '../../../store/configSaga';

export default (props) => {
    const [configs, _configs] = useState(false);
    const [imgUploaded, _imgUploaded] = useState(false);
    const { response } = useSelector(state => state.response);

    const dispatch = useDispatch();

    useEffect(() => {
        let isSubscribe = true;

        const fetch = async () => {
            const resp = await Api.get(Api.url.config, false);
            isSubscribe && resp.data && _configs(resp.data[0]);
        }

        fetch();
        return () => isSubscribe = false;
    }, []);


    useEffect(() => {
        response.from === "upload" && response.status && _imgUploaded(response.result)

    }, [response])


    useEffect(() => {
        if (imgUploaded)
            _configs({ ...configs, "logo": imgUploaded.img });
        _imgUploaded(false);
        

    }, [imgUploaded, configs]);

    const edit = () => {
        if (!configs.logo) return alert("Adicione a logomarca do site")
        if (!configs.title_home) return alert("Digite o título da home")
        if (!configs.subtitle_home) return alert("Digite o subtítulo da home")
        if (!configs.text_home) return alert("Digite o texto da home")
        if (!configs.text_about) return alert("Digite o texto sobre")


        dispatch(action.update(configs._id, configs));
    }

    return (
        <div style={{ marginBottom: "20px" }}>
            {configs && configs.logo &&
                <Center>
                    <img src={configs.logo} alt="" style={{ marginBottom: '20px' }} className="img-fluid" />
                </Center>}

            <Upload title="Clique aqui e selecione uma logomarca" logo={1} />

            <div className="form-group">
                <label>Título da home:</label>
                <textarea rows="4"
                    onChange={(e) => _configs({ ...configs, "title_home": e.target.value })}
                    className="form-control"
                    defaultValue={configs && configs.title_home} />
            </div>


            <div className="form-group">
                <label>Subtítulo da home:</label>
                <textarea rows="4"
                    onChange={(e) => _configs({ ...configs, "subtitle_home": e.target.value })}
                    className="form-control" defaultValue={configs && configs.subtitle_home} />
            </div>


            <div className="form-group">
                <label>Texto da home:</label>
                <textarea rows="4"
                    onChange={(e) => _configs({ ...configs, "text_home": e.target.value })}
                    className="form-control" defaultValue={configs && configs.text_home} />
            </div>


            <div className="form-group">
                <label>Texto sobre:</label>
                <textarea rows="4"
                    onChange={(e) => _configs({ ...configs, "text_about": e.target.value })}
                    className="form-control" defaultValue={configs && configs.text_about} />
            </div>



            <div className="form-group">
                <div className="btn btn-warning btn-block" onClick={edit}>ALTERAR</div>
            </div>
        </div>
    )
}