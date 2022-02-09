
import { Container, Header, Back, PageTitle, Item, ItemData, ItemName, Price, Quantity, Button } from './style.js'
import Arrow from '../../assets/back.png'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Back src={Arrow}></Back>
      </Header>
      <Container>
        <PageTitle>Carrinho</PageTitle>
        <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item> <Item><img src="https://popvinyls.com/wp-content/uploads/2014/02/06blacksuitjoker.jpg" alt="FunkoPop"/>
          <ItemData>
            <ItemName>Funko Teste</ItemName>
            <Price>R$627,00</Price>
            <Quantity>
              <button>-</button>
              <span>3</span>
              <button>+</button>
            </Quantity>
          </ItemData>
        </Item>
        <Button>Ir para o checkout</Button>
      </Container>
    </>
  );
}

export default Cart;
