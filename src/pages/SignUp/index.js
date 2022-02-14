import React, { useState } from 'react';
import api from '../../services/api';
import { Container, Form, Input, Button, StyledLink, Title } from '../../components/FormComponents/index.js';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'As senhas não coincidem!'
    })
    }

    const user = { ...formData };
    delete user.confirmPassword;

    try {
      await api.createUser(user);
      Swal.fire({
        icon:'success',
        title: 'Sucesso!',
        text: 'O usuário foi cadastrado'
      })
      navigate('/sign-in');
    } catch (error) {
      let errorMessage = (String(error));
        if(errorMessage.includes(422)){
          return Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'O usuário e a senha devem ter no mín 3 caracteres e o e-mail deve ser válido!',
          })
        } else if(errorMessage.includes(400)){
          return Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'O usuário já existe!',
          })
        }
    }
  }

  return (
    <Container>
      <Title onClick={() => navigate('/')}> BigHeadStore </Title>
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
      <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

export default SignUp;