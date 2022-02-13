import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/Index';
import api from '../../services/api';
import { Container, Products, Title } from './Style';

export default function Home() {
  const [products, setProducts] = useState([]);

  const renderProducts = () => {
    const promise = api.getProducts();
    promise.then(ans => setProducts(ans.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <Container>
      <Title>Selecione um produto!</Title>
      <Products>
        {
          products.map(product => {
            return (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })
        }
      </Products>
    </Container>
  );
}
