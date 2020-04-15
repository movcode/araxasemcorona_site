import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone'
import { BoxDropzone, Label } from './style';
import { action } from '../../store/uploadRedux';
import Center from '../../components/share_components/center';
import { Loader } from '../../components/share_components/global_style';
import swal from 'sweetalert';


const DropZone = ({ title, mTop, img, logo, icon }) => {
    const { response } = useSelector(state => state.response);
    const [load, _load] = useState(0);
    const disptach = useDispatch();



    useEffect(() => {
        if (response.from === "upload") _load(0)
    }, [response]);

    const isImage = file => {
        const ext = file.name.split(".").pop();

        const alowedExt = ['jpg', 'jpeg', 'png', 'JPEG'];
        const alowedMime = ['image/jpg', 'image/jpeg', 'image/png'];

        if (!alowedExt.includes(ext) || !alowedMime.includes(file.type)) return false;

        return true;
    }


    const upload = file => {
        _load(1);
        icon
            ? disptach(action.upload_sector(file))
            : disptach(action.upload(file))
    }

    const prepareImg = file => {
        const getfile = file[0];

        if (!isImage(getfile)) {
            swal({
                title: "Error!",
                text: "Arquivo inválido! ",
                icon: "error",
            });
            return false;
        }


        var reader = new FileReader();
        reader.onload = (function (entry) {
            var image = new Image();
            image.src = entry.target.result;
            image.onload = function () {

                if (logo || icon) {
                    upload(getfile);
                } else {
                    if (this.width < 500 || this.height < 500) {
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
                            : <img width="90" src={img} alt="img uploaded" className="img-fluid" />
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