import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/Index';
import api from '../../services/api';
import { Container, Products, Title, MarketCartContainer} from './Style';
import cartImg from "../../assets/cartImg.png";
import useCart from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { cart } = useCart();

  const navigate = useNavigate();

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
      <MarketCartContainer>
        <img src={cartImg} onClick={() => navigate('/cart')} alt='cart'/>
        <span onClick={() => navigate('/cart')}> {cart?.length} </span>
      </MarketCartContainer>
      <Title>Selecione seus produtos</Title>
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
