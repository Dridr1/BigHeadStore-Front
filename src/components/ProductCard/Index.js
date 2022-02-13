import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, PriceTag } from './Style';

export default function ProductCard({ image, name, price, id }) {
    const navigate = useNavigate();

    const goToProduct = id => {
        navigate(`/product/${id}`);
    }

    return (
        <Container onClick={() => goToProduct(id)}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <PriceTag>
                <span>PREÇO:</span>
                <p>R$ {price}</p>
            </PriceTag>

        </Container>
    );
}
