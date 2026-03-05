import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogOut, Home, ArrowLeft } from "lucide-react";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import {
  LoginContainer,
  LoginCard,
  LoginButton,
  LogoContainer,
} from "../Login/Login.js";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Aqui você limparia o LocalStorage ou o estado de Login
    // Exemplo: localStorage.removeItem("@VogueHub:User");
    
    // Redireciona para a Home automaticamente após 3 segundos
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LoginContainer>
      <GlobalStyle />
      <LoginCard>
        <LogoContainer>
          <div style={{ 
            background: "#fff1f1", 
            width: "80px", 
            height: "80px", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            margin: "0 auto 20px"
          }}>
            <LogOut size={40} color="#ff3e3e" />
          </div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "800" }}>Até logo!</h1>
          <p style={{ marginTop: "10px" }}>
            Você saiu da sua conta com segurança. <br />
            Esperamos ver você em breve no <strong>VogueHub</strong>.
          </p>
        </LogoContainer>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <LoginButton onClick={() => navigate("/")} style={{ background: "#000" }}>
            <Home size={18} /> Voltar para a Loja agora
          </LoginButton>
          
          <Link to="/login" style={{ 
            textDecoration: "none", 
            color: "#666", 
            fontSize: "0.9rem", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "5px",
            marginTop: "10px"
          }}>
            <ArrowLeft size={16} /> Entrar com outra conta
          </Link>
        </div>

        <div style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "0.75rem", color: "#999" }}>
            Redirecionando você em instantes...
          </p>
          <div style={{ 
            width: "100%", 
            height: "3px", 
            background: "#eee", 
            marginTop: "10px", 
            borderRadius: "10px",
            overflow: "hidden"
          }}>
            <div style={{ 
              width: "100%", 
              height: "100%", 
              background: "#ff3e3e",
              animation: "progress 4s linear" 
            }} />
          </div>
        </div>
      </LoginCard>

      {/* Pequena animação de barra de progresso */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </LoginContainer>
  );
}

export default Logout;