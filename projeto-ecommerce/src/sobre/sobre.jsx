import React from "react";
import { ShieldCheck, Truck, Clock, Users, ShoppingBag, User, Info, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";

import { 
  LoginContainer, 
  LoginCard as AboutCard, 
  LogoContainer 
} from "../Login/Login.js"; 

function Sobre() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <GlobalStyle />
      
      {/* --- HEADER INTEGRADO DIRETAMENTE --- */}
      <header style={{
        width: "100%",
        padding: "15px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "800", margin: 0 }}>
            Vogue<span style={{ color: "#ff3e3e" }}>Hub</span>
          </h1>
        </Link>

        <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <Link to="/" style={navLinkStyle}><Home size={18} /> Início</Link>
          <Link to="/sobre" style={{ ...navLinkStyle, color: "#ff3e3e" }}><Info size={18} /> Sobre</Link>
        </nav>
      </header>
      {/* --- FIM DO HEADER --- */}

      <LoginContainer style={{ 
        alignItems: "flex-start", 
        paddingTop: "40px", 
        paddingBottom: "60px",
        flex: 1 
      }}>
        <AboutCard style={{ maxWidth: "900px", textAlign: "left", padding: "40px", margin: "0 auto", border: "none" }}>
          
          <LogoContainer style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
              Sobre a Vogue<span style={{ color: "#ff3e3e" }}>Hub</span>
            </h1>
            <p style={{ color: "#666" }}>Excelência, Estilo e Confiança em cada detalhe.</p>
          </LogoContainer>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={sectionTitleStyle}>Nossa História</h2>
            <p style={textStyle}>
              A <strong>VogueHub</strong> nasceu em 2024 com a missão de transformar a experiência de compra online. 
              Focada em curadoria de alta qualidade, nossa plataforma une tecnologia de ponta e as últimas 
              tendências mundiais. Acreditamos que o consumo deve ser inteligente, seguro e, acima de tudo, 
              proporcionar satisfação imediata aos nossos clientes.
            </p>
          </section>

          {/* GRID DE DIFERENCIAIS */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
            gap: "20px", 
            margin: "40px 0" 
          }}>
            <div style={featureStyle}>
              <ShieldCheck size={32} color="#ff3e3e" />
              <h4 style={{ margin: "10px 0", color: "#333" }}>Segurança</h4>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>Pagamentos criptografados e proteção total.</p>
            </div>
            <div style={featureStyle}>
              <Truck size={32} color="#ff3e3e" />
              <h4 style={{ margin: "10px 0", color: "#333" }}>Logística</h4>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>Entregas rápidas para todo o território.</p>
            </div>
            <div style={featureStyle}>
              <Clock size={32} color="#ff3e3e" />
              <h4 style={{ margin: "10px 0", color: "#333" }}>Suporte</h4>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>Atendimento humanizado sempre disponível.</p>
            </div>
            <div style={featureStyle}>
              <Users size={32} color="#ff3e3e" />
              <h4 style={{ margin: "10px 0", color: "#333" }}>Comunidade</h4>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>Feito por pessoas apaixonadas por moda.</p>
            </div>
          </div>

          <section style={{ 
            backgroundColor: "#fff", 
            padding: "25px", 
            borderRadius: "12px", 
            borderLeft: "5px solid #ff3e3e",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Nossa Missão</h3>
            <p style={{ color: "#666", fontStyle: "italic", lineHeight: "1.6" }}>
              "Proporcionar uma jornada de compra intuitiva, oferecendo produtos que unem inovação e estilo, 
              garantindo que cada cliente se sinta parte exclusiva do nosso universo."
            </p>
          </section>

          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Link to="/" style={{ 
              backgroundColor: "#ff3e3e", 
              color: "white", 
              padding: "14px 35px", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1rem",
              display: "inline-block"
            }}>
              Ir para a Loja
            </Link>
          </div>
        </AboutCard>
      </LoginContainer>
    </div>
  );
}

// ESTILOS EM OBJETOS (Para manter o código limpo)
const navLinkStyle = {
  textDecoration: "none",
  color: "#666",
  fontWeight: "600",
  fontSize: "0.95rem",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  transition: "0.2s"
};

const sectionTitleStyle = {
  color: "#333",
  borderBottom: "2px solid #ff3e3e",
  display: "inline-block",
  marginBottom: "15px",
  fontSize: "1.5rem"
};

const textStyle = {
  color: "#666",
  lineHeight: "1.8",
  fontSize: "1rem"
};

const featureStyle = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "15px",
  textAlign: "center",
  backgroundColor: "#fff"
};

export default Sobre;