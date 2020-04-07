import React, { useState } from 'react';
import { CircularImage } from '../../share_components/global_style';
import Center from '../../share_components/center';
import Carousel from '../../share_components/carousel';


export default ({ sectors, _categories, _establishments }) => {
    const [selected, _selected] = useState([]);

    const setCategories = data => {
        _selected(data._id);

        if (data.categories[0].name === "Sem Categoria") {
            _categories(false);
            _establishments(data.categories[0].establishments);
        } else {
            _categories(data.categories);
        }
    }


    return (
        <Carousel sectors pages="4" pagesMob={3}>
            {
                sectors &&
                sectors.map(data =>
                    <div key={data._id}>
                        <CircularImage

                            onClick={() => setCategories(data)}
                            op={selected === data._id ? 1 : 0}
                            bg={data.icon}></CircularImage>
                        <Center>{data.title}</Center>
                    </div>
                )
            }
        </Carousel>
    );
}
