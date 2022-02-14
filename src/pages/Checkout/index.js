/* eslint-disable no-unused-vars */
import { Container, PageTitle, PurchaseInfo, Total, Button } from './style.js'
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import Swal from 'sweetalert2';

function Checkout() {
  const navigate = useNavigate();
  const { cart, fillCart } = useCart();
  const { auth } = useAuth();
  let totalPrice = 0;
  cart?.map(({ price, quantity }) => totalPrice += parseFloat(price.replace(',','.')) * parseFloat(quantity));
  
  const purchase = {products: cart, totalPrice}

  async function checkout() {
    try {
      const res = await api.checkout(auth.token, purchase)   
      if (res.status === 201) {
        Swal.fire({
          icon:'success',
          title: 'Sucesso!',
          text: 'Sua compra foi finalizada com sucesso!'
        })
        fillCart([]);
        navigate('/');
      } else {
        return Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Faça seu login para continuar!'
        })
      }
    } catch(err) {
      return Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Ocorreu algum erro, tente novamente'
      })
    }
  }

  return (
      
      <Container>
          <PageTitle>Checkout</PageTitle>
        <PurchaseInfo>
          <p>Detalhes do pedido:</p>
          {cart?.map((item) => (
            <div key={item?._id}>
              <span>{item?.name}  x  {item?.quantity}</span>
              <span>{item?.price}</span>
            </div>
          ))}
          <Total>
            <span>Total: </span>
            <span>{`R$${totalPrice.toFixed(2).replace('.', ',')}`}</span>
          </Total>
          </PurchaseInfo>
        <Button onClick={()=>checkout()}>Finalizar compra</Button>
      </Container>
    
  );
}

export default Checkout;