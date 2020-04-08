import React from 'react';
import { Box, BoxFigure, Figure, Name } from './styled';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ establishments }) => {

    return (
        <Row style={{ marginTop: "40px" }}>
            {
                establishments &&
                establishments.map(establishment =>

                    <div className="col-md-2 col-4" key={establishment._id}>
                        {establishment.img &&
                            <Link to={`/estabelecimentos/${establishment._id}`}>
                                <Box >
                                    <BoxFigure >
                                        <Figure src={establishment.img} />
                                    </BoxFigure>
                                    <Name className="text-truncate">{establishment.name}</Name>
                                </Box>
                            </Link>
                        }
                    </div>
                )
            }
        </Row>
    );
}


