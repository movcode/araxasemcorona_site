import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../share_components/carousel';

const Itens = styled.div`
    width:100%;
    height:40px;
    line-height: 40px;        
    color: #717171;
    border: 1px solid #dcdcdc;    
    border-radius: 10px;
    padding-left:5px;
    padding-right:5px;
    margin-left:5px;
    margin-right:5px;    
    text-align:center;    
    overflow:hidden;
    
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
            {
                categories.length > 0 && categories[0].name !== "Sem Categoria" &&
                <Carousel pages="5" pagesMob={3} >
                    {
                        categories && categories.map(data =>
                            <Itens
                                className="text-truncate"
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
