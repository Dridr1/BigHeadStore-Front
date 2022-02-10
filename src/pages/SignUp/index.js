import React, { useState } from 'react';
import api from '../../services/api';
import { Container, Form, Input, Button, StyledLink, Title } from '../../components/FormComponents';
import { useNavigate } from 'react-router';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigation = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas devem ser iguais");
      return;
    }

    const user = { ...formData };
    delete user.confirmPassword;

    try {
      await api.createUser(user);
      navigation('/');
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <Title> BigHeadStore </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          value={formData.name}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Input
          placeholder="Repita sua senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="confirmPassword"
          value={formData.confirmPassword}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

export default SignUp;