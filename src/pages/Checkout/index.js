import { Container, Back, PageTitle, PurchaseInfo, Button } from './style.js'
import Arrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCart from '../../hooks/useCart';


function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();
  let totalPrice = 0
  
  cart.map(({ price, quantity }) => totalPrice += parseFloat(price*quantity));
  console.log(totalPrice)

  function checkout() {
    
  }

  return (
      <>
      <Back src={Arrow} onClick={()=> navigate(-1)}></Back>
      <Container>
          <PageTitle>Carrinho</PageTitle>
        <PurchaseInfo>
          <p>Detalhes do pedido:</p>
          {cart.map((item) => (
            <div key={item._id}>{item.name} x {item.quantity} {`R$${parseFloat(item.price).toFixed(2).replace('.', ',')}`}</div>)
          )}
          <div><span>Total: </span>{`R$${parseFloat(totalPrice).toFixed(2).replace('.', ',')}`}</div>
          </PurchaseInfo>
        <Button onClick={()=>checkout()}>Finalizar compra</Button>
      </Container>
    </>
  );
}

export default Checkout;