import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Card from '../../share_components/card';
import { Api } from '../../../share/api';
import Itens from './itens';
import { Row } from 'react-bootstrap';
import Detail from './detail';

export default ({ openDialog }) => {

    const { response } = useSelector(state => state.response);
    const [establishments, _establishments] = useState(false);

    useEffect(() => {
        let isSubscribe = true;

        const fetch = async () => {
            const resp = await Api.get(Api.url.not_approved, true);
            isSubscribe && resp.data ? _establishments(resp.data) : _establishments(false)
        }

        response.from === 'setor' ? fetch() : fetch();
        return () => isSubscribe = false;
    }, [response]);


    return (
        <Row >
            {
                establishments &&
                establishments.map(establishment =>
                    <div className="col-md-4" key={establishment._id}  >
                        <Card
                            img={establishment.img}
                            title={establishment.name}
                            subtitle={
                                <Itens establishment={establishment} />
                            } />

                        <Detail data={establishment} />
                    </div>
                )
            }
        </Row>
    );
}


