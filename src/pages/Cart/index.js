import { CartContainer, PageTitle, Item, ItemData, ItemName, Price, Quantity, Button } from './style.js'
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth'
import { useState } from 'react';
import api from '../../services/api.js';
import Swal from 'sweetalert2';

function Cart() {
  const navigate = useNavigate();
  const [rerender, setRerender] = useState(true);
  const { fillCart } = useCart();
  const { cart } = useCart();
  const { auth } = useAuth()
  
  function removeItem(e) {
    const index = cart?.findIndex((item) => item?._id === e?.id);
    const item = cart?.filter((item) => item?._id === e?.id)[0];
    let cartUpdt;

    if (parseInt(item?.quantity) === 1) {
      cartUpdt = cart?.filter((item) => item?._id !== e?.id);
    } else {
      cartUpdt = cart
      cartUpdt[index].quantity = parseInt(cart[index].quantity) - 1;
    }
    fillCart(cartUpdt);
    setRerender(!rerender);
  }

  function addItem(e) {
    const index = cart.findIndex((item) => item?._id === e?.id);
    let cartUpdt = cart;
    cartUpdt[index].quantity = parseInt(cart[index].quantity) + 1;
    fillCart(cartUpdt);
    setRerender(!rerender);
  }

  async function verifyLogin() {
    if (!auth) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Para continuar faça seu login'
      })
      navigate('/sign-in')
    } else if (cart?.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: "Insira algum item no seu carrinho para continuar"
      })
    } else{
      try {
        const res = await api.validateToken(auth.token);
        res.status === 200 ? navigate('/checkout') : 
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Para continuar faça seu login'
        })
      }
      catch (error) {
        return Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Erro, recarregue a página e tente novamente'
        })
      }
    }
  }
  
  function RenderCart() {
    if (!cart || cart?.length === 0) {
      return "Seu carrinho está vazio"
    }
    return (
      cart?.map((item) => (
        <Item key={item?._id}><img src={item?.image} alt={item?.name} />
          <ItemData>
            <ItemName>{item?.name}</ItemName>
            <Price>{`R$${item?.price}`}</Price>
            <Quantity>
              <button onClick={(e) => removeItem(e.target)} id={item?._id}> - </button>
              <span>{item?.quantity}</span>
              <button onClick={(e) => addItem(e.target)} id={item?._id}> + </button>
            </Quantity>
          </ItemData>
        </Item>))
    )
  }
 
  return (
      <CartContainer>
        <PageTitle>Carrinho</PageTitle>
          <RenderCart/>
        <Button onClick={()=>verifyLogin()}>Ir para o checkout</Button>
      </CartContainer>
  );
}

export default Cart;