
import { Container, Back, PageTitle, Item, ItemData, ItemName, Price, Quantity, Button } from './style.js'
import Arrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCart from '../../hooks/useCart';
import { useState } from 'react';

function Cart() {
  const [rerender, setRerender] = useState(true);
  const navigate = useNavigate();
  let disabled = true;

  const { fillCart } = useCart();
  const { cart } = useCart();

  function removeItem(e) {
    const index = cart.findIndex((item) => item._id === e.id);
    const item = cart.filter((item) => item._id === e.id)[0];
    let cartUpdt;

    if (parseInt(item.quantity) === 1) {
      cartUpdt = cart.filter((item) => item._id !== e.id);
    } else {
      cartUpdt = cart
      cartUpdt[index].quantity = parseInt(cart[index].quantity) - 1;
    }
    fillCart(cartUpdt);
    setRerender(!rerender);

  }

  function addItem(e) {
    const index = cart.findIndex((item) => item._id === e.id);
    let cartUpdt = cart;

    cartUpdt[index].quantity = parseInt(cart[index].quantity) + 1;
    fillCart(cartUpdt);
    setRerender(!rerender);
  }

  function verifyLogin() {
   const promise = axios.get(`http://localhost:5000/users`,
      { headers: { Authorization: `Bearer e87b8462-99d9-4e8d-a916-5e2efa46eec` } }
    );
    promise.then((answer) => {
      if (!answer.status || answer.status !== 200) {
        alert("Para continuar faça seu login")
      } else {
        navigate('/checkout');
      }
    }) 
    promise.catch((err) => {
      alert("Para continuar faça seu login")
      navigate('/')
    })
  }
  
  function printCart() {
    if (!cart || cart.length === 0) {
      return "Seu carrinho está vazio"
    }

    disabled = false;
    
    return (
      cart.map((item) => (
          <Item key={item._id}><img src={item.image} alt={item.name} />
            <ItemData>
              <ItemName>{item.name}</ItemName>
              <Price>{`R$${parseFloat(item.price).toFixed(2).replace('.', ',')}`}</Price>
              <Quantity>
                <button onClick={(e) => removeItem(e.target)} id={item._id}> - </button>
                <span>{item.quantity}</span>
                <button onClick={(e) => addItem(e.target)} id={item._id}> + </button>
              </Quantity>
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
        <Button disabled={disabled} onClick={()=>verifyLogin()}>Ir para o checkout</Button>
      </Container>
    </>
  );
}

export default Cart;