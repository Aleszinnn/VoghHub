import React, { useState } from "react";
import { Mail, Lock, User, ShieldCheck, Phone, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import Controller from "../admins/Controller/Controller.jsx"; 

import {
  LoginContainer,
  LoginCard,
  InputGroup,
  StyledInput,
  LoginButton,
  LogoContainer,
} from "../Login/Login.js"; 

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await Controller.criarUsuario(formData);
      
      localStorage.setItem("@VogueHub:UserId", data.user.id);
      localStorage.setItem("@VogueHub:UserData", JSON.stringify(data.user));

      alert("✅ " + data.message);
      
      // Redireciona direto para o Perfil
      navigate("/perfil");
    } catch (error) {
      // O catch agora recebe a mensagem de erro de validação (email já existe)
      alert("❌ " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <LoginContainer>
      <GlobalStyle />
      <LoginCard style={{ maxWidth: "450px" }}>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "800" }}>
              Vogue<span style={{ color: "#ff3e3e" }}>Hub</span>
            </h1>
          </Link>
          <p>Crie sua conta para salvar seus favoritos e rastrear pedidos.</p>
        </LogoContainer>

        <form onSubmit={handleRegister}>
          <InputGroup>
            <User size={20} color="#999" />
            <StyledInput name="nome" type="text" placeholder="Nome Completo" required disabled={loading} value={formData.nome} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Mail size={20} color="#999" />
            <StyledInput name="email" type="email" placeholder="Seu melhor e-mail" required disabled={loading} value={formData.email} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Phone size={20} color="#999" />
            <StyledInput name="telefone" type="text" placeholder="WhatsApp (ex: 11 99999-9999)" disabled={loading} value={formData.telefone} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Lock size={20} color="#999" />
            <StyledInput name="senha" type="password" placeholder="Senha (8+ dígitos e caractere especial)" required disabled={loading} autoComplete="new-password" value={formData.senha} onChange={handleChange} />
          </InputGroup>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", textAlign: "left" }}>
            <input type="checkbox" id="terms" required style={{ accentColor: "#ff3e3e" }} />
            <label htmlFor="terms" style={{ fontSize: "0.75rem", color: "#666" }}>
              Eu aceito os <Link to="#" style={{ color: "#ff3e3e" }}>Termos de Uso</Link>.
            </label>
          </div>

          <LoginButton type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Criar Minha Conta <ShieldCheck size={18} /></>}
          </LoginButton>
        </form>

        <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#666" }}>
          Já faz parte do Hub? <Link to="/login" style={{ color: "#ff3e3e", fontWeight: "600", textDecoration: "none" }}>Fazer Login</Link>
        </p>
      </LoginCard>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </LoginContainer>
  );
}

export default Cadastro;