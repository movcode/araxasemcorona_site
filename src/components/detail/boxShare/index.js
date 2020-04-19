import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoxShare, Close, BoxButtonsShare, Href, Icon } from '../style';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



export default ({ handle }) =>
    <BoxShare >
        <Close onClick={() => handle(false)}>
            <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
        </Close>

        <BoxButtonsShare className="d-flex flex-column justify-content-center align-items-center" >
            <div className="col-md-3">
                <Href href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    className="btn btn-primary btn-block"
                >

                    <Icon className="ti-facebook" />
        Compartilhar no Facebook
        </Href>

                <Href href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                    target="_blank"
                    style={{ marginTop: "40px" }}
                    className="btn btn-success btn-block">

                    <img width="24" src="/img/whatsapp.png" style={{ float: 'left' }} alt="" />
        Compartilhar no Whatsapp
        </Href>
            </div>

        </BoxButtonsShare>
    </BoxShare>