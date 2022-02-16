import styled from "styled-components";

const Back = styled.img`
  width: 25px;
  height: 20px;
  position: fixed;
  left: 20px;
  top: 18px;
  z-index: 10;
  :hover {
    cursor: pointer;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 15px;
  gap: 30px;
`;

const PageTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
  font-family: Sancreek;
  font-weight: 100;
  letter-spacing: 1.5px;
`;
  
const Item = styled.div`
  height: auto;
  width: 350px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 25px; 
  background: #e5e5e5;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: 3px 3px 8px gray;
  & img{
    width: 8em;
    height: auto;
    border-radius: 15px;
  }
  & p{
    color: #000000;
  }
`;

const ItemData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;  
`;

const ItemName = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 18px;
`;

const Quantity = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  color: #898989;
  font-size: 18px;
  & button {
  :hover{
    cursor: pointer;
  }
  }
   & span{
    color: #000000;
    margin: 0 15px;    
  }
`;

const Button = styled.button`
  margin-top: 30px;
  width: 350px;
  height: 55px;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF; 
  background: #EB4629;
  border-radius: 20px;
  :hover{
    cursor: pointer;
  }
`;

export { CartContainer, Back, PageTitle, Item, ItemData, ItemName, Price, Quantity, Button};