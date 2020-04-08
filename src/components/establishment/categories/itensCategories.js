import React, { useState } from 'react';

import styled from 'styled-components';
import Carousel from '../../share_components/carousel';

const Itens = styled.div`
background: transparent;
    color: #717171;
    border: 1px solid #dcdcdc;
    padding-top:8px;
    padding-bottom:8px;   
    padding-left:20px;
    padding-right:20px;    
    border-radius: 4px;
    margin:15px;
    background:${props => props.active === 1 ? "#ededed" : "white"};
    cursor:pointer;
    &:hover{
        background:#ededed;
    }
`;

export default ({ categories, _establishments }) => {
    const [selected, _selected] = useState(false);


    const setEstablishment = (data) => {
        _selected(data._id);

        !data.establishments[0] ? _establishments("empty") : _establishments(data.establishments);
    }

    return (
        <div >
            {categories &&
                categories[0].name === "Sem Categoria" ? <></>
                : <Carousel pages="6" pagesMob={3}>
                    {
                        categories && categories.map(data =>
                            <Itens
                                key={data._id}
                                onClick={() => setEstablishment(data)}
                                active={selected === data._id ? 1 : 0}>
                                {data.name}
                            </Itens>)
                    }
                </Carousel>
            }

        </div>);
}
