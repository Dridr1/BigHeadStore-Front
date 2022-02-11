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
`;
  
const PurchaseInfo = styled.div`
  width: 100vw;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  & p{
    font-weight: bold;
    font-size: 22px; 
    margin-bottom: 60px; 
    }
  & div{
    min-width: 320px;
    display:flex;
    justify-content: space-between;
  }
`;

const Total = styled.div`
  margin-top: 50px;
  & span{
    font-size: 20px;
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

export { Container, Back, PageTitle, PurchaseInfo, Total, Button};