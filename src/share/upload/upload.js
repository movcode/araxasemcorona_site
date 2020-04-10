import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone'
import { BoxDropzone, Label } from './style';
import { action } from '../../store/uploadRedux';
import Center from '../../components/share_components/center';
import { Loader } from '../../components/share_components/global_style';
import swal from 'sweetalert';



const DropZone = ({ title, mTop, img, logo }) => {
    const { response } = useSelector(state => state.response);
    const [load, _load] = useState(0);
    const disptach = useDispatch();



    useEffect(() => {
        if (response.from === "upload") _load(0)
    }, [response]);

    const isImage = file => {
        switch (file) {
            case "image/jpg": return true;
            case "image/jpeg": return true;
            case "image/png": return true;
            default: return false;
        }
    }


    const upload = file => {
        _load(1);
        disptach(action.upload(file))
    }

    const prepareImg = file => {
        const getfile = file[0];

        if (!isImage(getfile.type)) {
            swal({
                title: "Error!",
                text: "Arquivo inválido! ",
                icon: "error",
            });
            return false;
        }

        if (getfile.size > 100000) {
            swal({
                title: "Imagem muito grande",
                text: "Selecione uma imagem um pouco menor",
                icon: "error",
            });
            return false;
        }


        var reader = new FileReader();
        reader.onload = (function (entry) {
            var image = new Image();
            image.src = entry.target.result;
            image.onload = function () {

                if (logo) {
                    upload(getfile);
                } else {
                    if (this.width < 500) {
                        swal({
                            title: "Imagem pequena!",
                            text: "Seleciona uma imagem do seguinte tamanho: 500px x 500px ",
                            icon: "error",
                        });
                    } else {
                        upload(getfile);
                    }
                }

            };
        });

        return reader.readAsDataURL(getfile);

    }

    return (
        <Dropzone onDrop={acceptedFiles => prepareImg(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
                <BoxDropzone top={mTop}>
                    <div {...getRootProps()}>

                        {!img
                            ? <Label style={{ cursor: 'pointer' }}>{title + " (tamanho recomendado 500x500px)"}</Label>
                            : <img src={img} alt="img uploaded" className="img-fluid" />
                        }
                        <Center>
                            <Loader active={load} src="/img/loader.gif" />
                        </Center>
                        <input  {...getInputProps()} />
                    </div>
                </BoxDropzone>
            )}
        </Dropzone>
    )
}


export default DropZone;