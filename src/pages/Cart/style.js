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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 15px;
  margin-top: 35px;
  gap: 30px;
`;

const PageTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`;
  
const Item = styled.div`
  height: 200px;
  width: 350px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px; 
  background: #e5e5e5;
  border-radius: 25px;
  & img{
    max-width: 112px;
    max-height: 148px;
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
  justify-items: space-between;
  align-items: flex-end;
  gap: 40px;
  padding-top: 30px;
`;

const ItemName = styled.p`
  font-size: 20px;
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

export { Container, Back, PageTitle, Item, ItemData, ItemName, Price, Quantity, Button};