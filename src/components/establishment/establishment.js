import React, { useState, useEffect } from 'react';
import { Background, Title, Text } from '../share_components/global_style';
import { Link } from 'react-router-dom';
import Container from '../share_components/Container';
import Center from '../share_components/center';
import SectorItens from './sectors';
import CategoriesItens from './categories';
import ListEstablishment from './list'


const Establishment = ({ sectors }) => {
    const [categories, _categories] = useState(false);
    const [establishments, _establishments] = useState(false);
    const [categorieSelected, _categorieSelected] = useState(false);
    const [allEstablishments, _allEstablishments] = useState(false);


    useEffect(() => {
        if (categories) {
            const all = categories.map(c =>
                c.establishments
                    .reduce((e, c) => e = c, 0)
            );

            _allEstablishments(all.filter(Boolean));
        }

    }, [categories]);

    useEffect(() => {
        sectors && _categories(sectors[0].categories);
    }, [sectors]);

    return (
        <Background bg="white" bottom="120">
            <Container>

                <Center>
                    <Title size="60px" sizeM="40px" bottom="60px" > Estabelecimentos</Title>
                </Center>

                <Center>
                    <div className="col-md-6">
                        <SectorItens sectors={sectors}
                            _establishments={_establishments}
                            _categories={_categories} />
                    </div>
                </Center>

                <Center top="80px">
                    <div className="col-md-12">
                        <CategoriesItens
                            _categorieSelected={_categorieSelected}
                            categories={categories}
                            _establishments={_establishments} />
                    </div>
                </Center>

                <Center>
                    <div className="col-md-12">
                        {
                            !categorieSelected
                                ? <ListEstablishment establishments={allEstablishments} />
                                : establishments !== "empty"
                                    ? <ListEstablishment establishments={establishments} />
                                    : <div style={{ marginTop: "80px" }}>
                                        <Center>
                                            <Text color="black">Nenhum estabelecimento cadastrado nesta categoria. </Text>
                                        </Center>


                                        <Center>
                                            <Link to="/registro"
                                                className="btn btn-warning  btn-sm">Clique aqui para adicionar um estabelecimento</Link>
                                        </Center>

                                    </div>
                        }
                    </div>
                </Center>
            </Container>
        </Background>
    );

}

export default Establishment;