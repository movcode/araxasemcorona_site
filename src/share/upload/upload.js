import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone'
import { BoxDropzone, Label } from './style';
import { action } from '../../store/uploadRedux';
import Center from '../../components/share_components/center';
import { Loader } from '../../components/share_components/global_style';
import swal from 'sweetalert';


var md5 = require('md5');

const DropZone = ({ title, mTop, img, logo }) => {
    const { response } = useSelector(state => state.response);
    const [errorUpload, _errorUpload] = useState(null);
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

    const getNameImage = file => {
        const randoName = md5(Math.floor(Math.random() * 1100000));
        const splitname = file.name.split(".");
        const ext = splitname[1];
        const name = `${randoName}.${ext}`;
        return name;
    }

    const upload = file => {
        _load(1);
        const name = getNameImage(file);
        disptach(action.upload(file, name))
    }

    const prepareImg = file => {
        const getfile = file[0];


        var reader = new FileReader();
        reader.onload = (function (entry) {
            // The Image() constructor creates a new HTMLImageElement instance.
            var image = new Image();
            image.src = entry.target.result;
            image.onload = function () {

                if (logo === 1) {
                    isImage(getfile.type) ? upload(getfile) : _errorUpload("Arquivo inválido!");
                } else {
                    if (this.width < 500) {
                        return swal({
                            title: "Error!",
                            text: "Selecione uma imagem maior, acima de 500 px",
                            icon: "error",
                        })
                    } else {
                        isImage(getfile.type) ? upload(getfile) : _errorUpload("Arquivo inválido!");
                    }
                }
            };
        });

        return reader.readAsDataURL(getfile);

    }

    return (
        <Dropzone onDrop={acceptedFiles => prepareImg(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
                <BoxDropzone top={mTop} error={!errorUpload ? 0 : 1}>
                    <div {...getRootProps()}>

                        {!img
                            ? <Label style={{ cursor: 'pointer' }}>{errorUpload === null ? title + " (acima de 500px de largura)" : errorUpload}</Label>
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