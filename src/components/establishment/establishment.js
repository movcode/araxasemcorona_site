import React, { useState, useEffect } from 'react';
import { Background, Title, Text } from '../share_components/global_style';
import { Link } from 'react-router-dom';
import Container from '../share_components/Container';
import Center from '../share_components/center';
import SectorItens from './sectors';
import CategoriesItens from './categories';
import ListEstablishment from './list'
import { BoxEstablishments, InputSearch, IconSearch } from './style';

const Establishment = ({ sectors }) => {

    const [categories, _categories] = useState(false);
    const [establishments, _establishments] = useState(false);

    const [establishmentFiltered, _establishmentFiltered] = useState(false);

    useEffect(() => {
        sectors && sectors[0] &&
            _categories(sectors[0].categories);
    }, [sectors]);

    useEffect(() => {
        _establishmentFiltered(false);        
    }, [categories, establishments])

    useEffect(() => {
        if (!establishments && sectors) {
            const all = [];
            sectors.map(s => s.categories
                .map(c => c.establishments
                    .map(e => all.push(e))
                )
            )
            _establishments(all);
        }
    }, [establishments, sectors]);


    const filter = text => {
        const filtered = establishments.filter(e =>
            e.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
        );
        _establishmentFiltered(filtered);
    }

    return (
        <Background bg="white" bottom="120">
            <Container>

                <Center>
                    <Title size="60px" sizeM="40px" bottom="60px" > Estabelecimentos</Title>
                </Center>

                <Center>
                    <div className="col-md-9">
                        <SectorItens sectors={sectors}
                            _establishments={_establishments}
                            _categories={_categories} />
                    </div>
                </Center>

                <Center top="80px">
                    <div className="col-md-12">
                        <CategoriesItens
                            categories={categories}
                            _establishments={_establishments} />
                    </div>
                </Center>
            </Container>

            <BoxEstablishments className="col-md-12">
                <Center>
                    <div className=" col-md-4">
                        <InputSearch onChange={(e) => filter(e.target.value)}
                            className="form-control" type="text" placeholder="Buscar " />
                        <IconSearch className="ti-search" />
                    </div>
                </Center>

                {
                    establishments !== "empty" && establishments.length > 0
                        ? establishmentFiltered ? <ListEstablishment establishments={establishmentFiltered} />
                            : <ListEstablishment establishments={establishments} />
                        : <div style={{ marginTop: "60px" }}>
                            <Center>
                                <Text color="black">Nenhum estabelecimento cadastrado nesta categoria. </Text>
                            </Center>
                            <Center>
                                <Link to="/registro"
                                    className="btn btn-warning  btn-sm">Clique aqui para adicionar um estabelecimento</Link>
                            </Center>
                        </div>
                }
            </BoxEstablishments>

        </Background>
    );

}

export default Establishment;