import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageCircle,
  LogOut,
  Loader2,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import { LoginContainer, LoginCard, LoginButton } from "../Login/Login.js";

function Perfil() {
  const [dados, setDados] = useState(() => {
    const salvo = localStorage.getItem("@VogueHub:UserData");
    return salvo ? JSON.parse(salvo) : null;
  });
  const [loading, setLoading] = useState(!dados);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarPerfil = async () => {
      const usuarioId = localStorage.getItem("@VogueHub:UserId");

      if (!usuarioId) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3001/usuarios/${usuarioId}`,
        );

        setDados(response.data);
        localStorage.setItem(
          "@VogueHub:UserData",
          JSON.stringify(response.data),
        );
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        if (!dados) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    carregarPerfil();
  }, [navigate, dados]);

  // FUNÇÃO ATUALIZADA: Agora direciona para a rota /logout
  const handleGoToLogout = () => {
    navigate("/logout");
  };

  if (loading && !dados) {
    return (
      <div style={loadingContainer}>
        <Loader2 className="animate-spin" size={40} color="#ff3e3e" />
        <p style={{ marginTop: "10px", color: "#666" }}>Carregando seu Hub...</p>
      </div>
    );
  }

  return (
    <LoginContainer style={{ position: "relative" }}>
      <GlobalStyle />

      {/* BOTÃO DE SAIR NO CANTO DA PÁGINA */}
      <button 
        onClick={handleGoToLogout} 
        style={floatingLogoutStyle}
        title="Sair do sistema"
      >
        <LogOut size={20} />
        <span style={{ fontWeight: "600" }}>Sair</span>
      </button>

      <LoginCard style={{ maxWidth: "600px", padding: "40px" }}>
        
        <div style={headerContainer}>
          <div style={avatarContainer}>
            {dados?.nome?.charAt(0).toUpperCase() || <User size={40} />}
          </div>

          <h2 style={titleStyle}>
            Olá, <span style={{ color: "#ff3e3e" }}>{dados?.nome?.split(" ")[0]}</span>!
          </h2>
        </div>

        <hr style={{ border: "0.5px solid #eee", margin: "25px 0" }} />

        <h3 style={sectionTitle}>Informações da Conta</h3>
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <div style={infoBox}>
            <div style={iconWrapper}><User size={18} /></div>
            <div style={{ flex: 1 }}>
              <small style={labelStyle}>NOME COMPLETO</small>
              <p style={valueStyle}>{dados?.nome}</p>
            </div>
            <Settings size={16} color="#ccc" style={{ cursor: "pointer" }} />
          </div>

          <div style={infoBox}>
            <div style={iconWrapper}><Mail size={18} /></div>
            <div style={{ flex: 1 }}>
              <small style={labelStyle}>E-MAIL CADASTRADO</small>
              <p style={valueStyle}>{dados?.email}</p>
            </div>
          </div>

          <div style={infoBox}>
            <div style={iconWrapper}><Phone size={18} /></div>
            <div style={{ flex: 1 }}>
              <small style={labelStyle}>WHATSAPP / CELULAR</small>
              <p style={valueStyle}>{dados?.telefone || "Não informado"}</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <LoginButton
            onClick={() => window.open(`https://wa.me/5511999999999?text=Olá, preciso de suporte`)}
            style={supportButtonStyle}
          >
            Suporte via WhatsApp <MessageCircle size={18} />
          </LoginButton>

          {/* Botão interno que também leva para a rota /logout */}
          <button onClick={handleGoToLogout} style={logoutButtonStyle}>
            <LogOut size={18} /> Encerrar Sessão
          </button>
        </div>
      </LoginCard>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </LoginContainer>
  );
}

// --- ESTILOS ---

const floatingLogoutStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#fff",
  border: "1px solid #eee",
  padding: "10px 20px",
  borderRadius: "30px",
  cursor: "pointer",
  color: "#ff3e3e",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const headerContainer = { 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  width: "100%",
  marginBottom: "30px" 
};

const titleStyle = {
  fontSize: "1.8rem",
  fontWeight: "800",
  margin: "20px 0 0 0",
  textAlign: "center",
  width: "100%",
  display: "block",
  color: "#333"
};

const loadingContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const supportButtonStyle = {
  background: "#25D366",
  border: "none",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  color: "#fff",
  cursor: "pointer"
};

const avatarContainer = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff3e3e 0%, #ff8e8e 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  boxShadow: "0 4px 15px rgba(255, 62, 62, 0.3)",
};

const sectionTitle = {
  textAlign: "left",
  fontSize: "1rem",
  fontWeight: "700",
  marginBottom: "15px",
  color: "#333",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const infoBox = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "12px 18px",
  background: "#fff",
  borderRadius: "12px",
  marginBottom: "12px",
  border: "1px solid #f0f0f0",
};

const iconWrapper = {
  background: "#fff1f1",
  padding: "10px",
  borderRadius: "10px",
  color: "#ff3e3e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const labelStyle = {
  fontSize: "0.65rem",
  color: "#aaa",
  fontWeight: "bold",
  display: "block",
  marginBottom: "2px",
};

const valueStyle = {
  fontSize: "0.95rem",
  color: "#444",
  fontWeight: "600",
  margin: 0,
};

const logoutButtonStyle = {
  background: "none",
  border: "1px solid #eee",
  color: "#999",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontWeight: "600",
  marginTop: "10px"
};

export default Perfil;