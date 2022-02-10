
import { Container, Back, PageTitle, Item, ItemData, ItemName, Price, Remove, Button } from './style.js'
import Arrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCart from '../../hooks/useCart';

function Cart() {
  const navigate = useNavigate();

  const { fillCart } = useCart();
  const { cart } = useCart();

  function removeFromCart(e) {
    const cartUpdt = cart.filter((item) => item._id !== e.id);
    fillCart(cartUpdt);
  }

  function verifyLogin() {
   const promise = axios.get(`http://localhost:5000/users`,
      { headers: { Authorization: `Bearer e87b8462-99d9-4e8d-a916-5e2efa46eec` } }
    );
    promise.then((answer) => {
      if (!answer.status || answer.status !== 200) {
        alert("Para continuar faça o login")
      } else {
        navigate('/checkout');
      }
    }) 
    promise.catch((err) => {
      alert("Para continuar faça o login")
    })
  }

  function printCart() {
    if (!cart) { return "Seu carrinho está vazio" }
    
    return (
      cart.map((item) => (
          <Item key={item._id}><img src={item.image} alt={item.name} />
            <ItemData>
              <ItemName>{item.name}</ItemName>
              <Price>{`R$${parseFloat(item.price).toFixed(2).replace('.', ',')}`}</Price>
              <Remove>
                <button onClick={(e) => removeFromCart(e.target)} id={item._id}>Remover</button>
              </Remove>
            </ItemData>
          </Item>))
    )
  }
 
  return (
    <>
      <Back src={Arrow} onClick={()=> navigate(-1)}></Back>
      <Container>
        <PageTitle>Carrinho</PageTitle>
          {printCart()}
        <Button onClick={()=>verifyLogin()}>Ir para o checkout</Button>
      </Container>
    </>
  );
}

export default Cart;