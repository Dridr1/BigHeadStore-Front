import { useEffect, useState } from 'react';
import { Back, Container, Image, Name, Description, Footer, Price, Button } from './style';
import { useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../assets/back.png'

function Product() {
  const {id} = useParams();
  const [item, setItem] = useState({})
  const { cart, fillCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line
  }, [])


  function loadPage() {
    const promise = api.getProduct(id);
    promise.then((res) => {
      setItem(res.data);
    })
    promise.catch((err=> console.log(err)))
  }

  function putOnCart(e) {
    const index = (cart ? cart.findIndex((item) => item._id === e.id) : -1 );
    const cartUpdt = (cart ? cart : []);
    if (index === -1) {
      cartUpdt.push({ ...item, quantity: 1 });
    } else {
      cartUpdt[index].quantity = parseInt(cart[index].quantity) + 1;
    }
    fillCart(cartUpdt);
    navigate('/cart')
  }

  return (
    <>
      <Back src={Arrow} onClick={()=> navigate(-1)}></Back>
      <Container>
        <Image src={item?.image} alt={item?.name} />
          <Name>{item?.name}</Name>
        <Description>{item?.description}</Description>
        <Footer>
          <Price>{`R$${item?.price}`}</Price>
          <Button onClick={(e)=> putOnCart(e.target)} id={item?._id}>Adicionar ao carrinho</Button>
        </Footer>
      </Container>
    </>
  );
}

export default Product;