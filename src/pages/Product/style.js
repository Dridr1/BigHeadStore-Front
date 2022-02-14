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
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 12px 30px 12px;
`;

const Image = styled.img`
  margin-top: 35px;
  max-width: 300px;
  max-height: 310px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Name = styled.p`
  margin-top: 40px;
  font-weight: bold;
  font-size: 20px;
`;

const Description = styled.p`
width: 100vw;
margin-top: 35px;
font-size: 15px;
line-height: 13px;
justify-content: center;
text-align: center;
display: flex;
color: #AFAFAF;
padding: 0 30px;
`;

const Footer = styled.div`
  margin-top: 80px;
  min-width: 350px;
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
  min-width: 150px;
  height: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  background: #E14327;
  border-radius: 5px;
  font-size: 14px;
  color: #FFFFFF;
  :hover{
    cursor: pointer;
  }
    @media(max-width: 335px){
    width: 33vw;
  }
`;

export {Back, Container, Image, Name, Description, Footer, Price, Button };