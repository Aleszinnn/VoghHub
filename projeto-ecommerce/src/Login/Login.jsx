import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Github, Chrome, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import Controller from "../admins/Controller/Controller.jsx"; // CORREÇÃO: Import atualizado
import {
  LoginContainer,
  LoginCard,
  InputGroup,
  StyledInput,
  LoginButton,
  Divider,
  SocialButtons,
  SocialButton,
  LogoContainer,
} from "./Login.js";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isAdmin = email === "admin@voguehub.com";

    try {
      if (isAdmin) {
        await Controller.loginAdmin({ email, senha });
        localStorage.setItem("@VogueHub:UserId", "admin");
        const adminData = { nome: "Administrador", email: email };
        localStorage.setItem("@VogueHub:UserData", JSON.stringify(adminData));
        navigate("/admin");
      } else {
        const response = await Controller.loginUsuario({ email, senha });
        localStorage.setItem("@VogueHub:UserId", response.id);
        navigate("/perfil");
      }
    } catch (error) {
      alert("❌ " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <GlobalStyle />
      <LoginCard>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "800" }}>
              Vogue<span style={{ color: "#ff3e3e" }}>Hub</span>
            </h1>
          </Link>
          <p>Entre para acessar suas ofertas exclusivas</p>
        </LogoContainer>

        <form onSubmit={handleLogin}>
          <InputGroup>
            <Mail size={20} color="#999" />
            <StyledInput type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} autoComplete="username" />
          </InputGroup>

          <InputGroup>
            <Lock size={20} color="#999" />
            <StyledInput type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} disabled={loading} autoComplete="current-password" />
          </InputGroup>

          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <Link to="#" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none" }}>Esqueceu a senha?</Link>
          </div>

          <LoginButton type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Entrar na conta <ArrowRight size={18} /></>}
          </LoginButton>
        </form>

        <Divider><span>ou continue com</span></Divider>

        <SocialButtons>
          <SocialButton type="button"><Chrome size={20} /> Google</SocialButton>
          <SocialButton type="button"><Github size={20} /> GitHub</SocialButton>
        </SocialButtons>

        <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#666" }}>
          Não tem uma conta? <Link to="/cadastro" style={{ color: "#ff3e3e", fontWeight: "600", textDecoration: "none" }}>Cadastre-se</Link>
        </p>
      </LoginCard>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </LoginContainer>
  );
}

export default Login;
