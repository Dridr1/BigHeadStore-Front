import { useEffect, useState } from 'react';
import { Container, Image, Name, Description, Footer, Price, Button } from './style';
import { useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const [item, setItem] = useState({
image: "https://www.techinn.com/f/13795/137954182/funko-pop-marvel-wandavision-wanda-70s.jpg"
,name: "Wanda"
,price: "500"
,quantity: 1
,_id: "15"});
  const { cart, fillCart } = useCart();
  const navigate = useNavigate();

  function loadPage() {
        setItem(api.getProduct(id))
  }

 //useEffect(() => {
 //  loadPage();
 //}, [])

  function putOnCart(e) {
    const index = cart.findIndex((item) => item._id === e.id);
    const cartUpdt = cart
    if (index === -1) {
      cartUpdt.push({ ...item, quantity: 1 });
    } else {
      cartUpdt[index].quantity = parseInt(cart[index].quantity) + 1;
    }
    fillCart(cartUpdt);
    navigate('/cart')
}

  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Name>{item.name}</Name>
      <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laborum sit commodi voluptatum molestiae. Omnis rem voluptatum deserunt mollitia similique maiores repellendus delectus ad doloremque iusto? Soluta officiis veniam laudantium!</Description>
      <Footer>
        <Price>{`R$${parseFloat(item.price).toFixed(2).replace('.', ',')}`}</Price>
        <Button onClick={(e)=> putOnCart(e.target)} id={item._id}>Adicionar ao carrinho</Button>
      </Footer>
    </Container>

  );
}

export default Product;