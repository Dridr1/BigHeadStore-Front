import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 12px 30px 12px;
`;

const Image = styled.img`
  max-width: 250px;
  max-height: 310px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Description = styled.p`
width: 100vw;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
color: #AFAFAF;
padding: 0 30px;
`;

const Footer = styled.div`
  width: 330px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #E5E5E5;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media(max-width: 335px){
    width: 100vw;
    border-radius: 0px;

  }
`;

const Price = styled.p`
  font-size: 18px;
  color: #0A0A0A;
`;

const Button = styled.button`
  width: 110px;
  height: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  background: #E14327;
  border-radius: 5px;
  font-size: 10px;
  color: #FFFFFF;
  :hover{
    cursor: pointer;
  }
    @media(max-width: 335px){
    width: 33vw;
  }
`;

export { Container, Image, Name, Description, Footer, Price, Button };