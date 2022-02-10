import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => props.alignSelf || 'initial'};
  padding: 0px 25px;
  background-color: #EB4629;
  min-height: 100vh;
  min-width: 100vw;
`;

const Title = styled.h1`
  font-family: Sancreek;
  font-size: 36px;
  font-weight: 400;
  line-height: 50px;
  text-align: center;
  color: #FFFFFF;

  margin-bottom: 50px;
`

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 32px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  color: #000;
  background: #FFFFFF;
  padding: 15px 16px;
  border-radius: 15px;

  ::placeholder {
    color: #000;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  font-family: Rubik;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  padding: 12px;
  background: #9C2D23;
  border-radius: 15px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  color: #FFF;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

export {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Title
}