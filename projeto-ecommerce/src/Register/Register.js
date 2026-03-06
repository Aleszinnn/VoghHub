import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050505;
  color: #fff;
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Input = styled.input`
  padding: 15px;
  background: #111;
  border: 1px solid #333;
  color: #fff;
  border-radius: 4px;
  outline: none;
  &:focus { border-color: #ff3e3e; }
`;

const Button = styled.button`
  padding: 15px;
  background: #ff3e3e;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover { background: #d32f2f; }
`;

function Register() {
  return (
    <Container>
      <Form>
        <Title>Cadastro</Title>
        <Input type="text" placeholder="Nome Completo" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button>Criar Conta</Button>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
          Já tem conta? <Link to="/login" style={{ color: '#fff' }}>Entrar</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Register;