/* eslint-disable no-unused-vars */
import { Container, Back, PageTitle, PurchaseInfo, Total, Button } from './style.js'
import Arrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { auth } = useAuth();
  let totalPrice = 0;
  cart.map(({ price, quantity }) => totalPrice += parseFloat(price.replace(',','.')) * parseFloat(quantity));
  
  const purchase = {products: cart, totalPrice}

  async function checkout() {
    try {
      const res = await api.checkout(auth.token, purchase)   
      if (res.status === 201) {
        alert("Sua compra foi finalizada com sucesso!")
        navigate('/')
      } else {
        alert("Ocorreu algum erro, tente novamente")
      }
    } catch(err) {
      alert("Ocorreu algum erro, tente novamente")
    }
  }

  return (
      <>
      <Back src={Arrow} onClick={()=> navigate(-1)}></Back>
      <Container>
          <PageTitle>Checkout</PageTitle>
        <PurchaseInfo>
          <p>Detalhes do pedido:</p>
          {cart.map((item) => (
            <div key={item._id}>
              <span>{item.name}  x  {item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <Total>
            <span>Total: </span>
            <span>{`R$${totalPrice.toFixed(2).replace('.', ',')}`}</span>
          </Total>
          </PurchaseInfo>
        <Button onClick={()=>checkout()}>Finalizar compra</Button>
      </Container>
    </>
  );
}

export default Checkout;