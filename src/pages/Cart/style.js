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
  justify-content: space-around;
  align-items: center;
  background: #C4C4C4;
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
  gap: 30px;
  padding-top: 30px;
`;

const ItemName = styled.p`
  font-size: 20px;
`;

const Price = styled.p`
  font-size: 18px;
  margin-bottom: 15px
`;

const Quantity = styled.div`
  height:27px;
  width:107px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  background: #F5F5F5;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  & button {
  font-size: 18px;
  color: #BDBDBD;
  :hover{
    cursor: pointer;
  }
  }
  & span{
  font-size: 18px;
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