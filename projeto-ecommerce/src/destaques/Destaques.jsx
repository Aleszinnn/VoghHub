import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import { Header, InterfaceHeader, Logo, Nav, NavLink } from "../home/App.js";
import * as S from "./Destaques.js";

function Destaques() {
  const tendencias = [
    { title: "SILK ARCHIVE", img: "https://images.unsplash.com/photo-1595777457583-95e059d5e7b8?q=80&w=600" },
    { title: "NEO-DENIM", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600" },
    { title: "VELVET DATA", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=600" }
  ];

  return (
    <S.Container>
      <GlobalStyle />
      
      {/* HEADER */}
      <Header style={{ background: 'transparent', borderBottom: '1px solid #222' }}>
        <InterfaceHeader>
          <Logo href="/">Vogue<span>Hub</span></Logo>
          <Nav>
            <Link to="/" style={{ textDecoration: 'none' }}><NavLink>Home</NavLink></Link>
            <Link to="/ofertas" style={{ textDecoration: 'none' }}><NavLink>Ofertas</NavLink></Link>
            <Link to="/destaques"><NavLink style={{ color: '#fff', borderBottom: '2px solid #fff' }}>Destaques</NavLink></Link>
          </Nav>
        </InterfaceHeader>
      </Header>

      {/* LETREIRO INFINITO */}
      <S.InfiniteText>
        <h2>THE FUTURE OF STYLE • HIGH FASHION • 2026 SEASON • </h2>
        <h2>THE FUTURE OF STYLE • HIGH FASHION • 2026 SEASON • </h2>
      </S.InfiniteText>

      {/* GRID COM HOVER COLORIDO */}
      <S.HighlightSection style={{ marginTop: '50px' }}>
        <S.FeaturedCard bg="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600">
           <div style={{ padding: '40px' }}><h3>VOID_01</h3></div>
        </S.FeaturedCard>
        <S.FeaturedCard bg="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=600">
           <div style={{ padding: '40px' }}><h3>NEO_02</h3></div>
        </S.FeaturedCard>
      </S.HighlightSection>

      {/* TENDÊNCIAS FEMININAS */}
      <section className="trends-section">
        <div className="trends-grid">
          {tendencias.map((item, i) => (
            <div key={i} className="trend-card">
              <div className="trend-img" style={{ backgroundImage: `url(${item.img})` }}></div>
              <h4 style={{ marginTop: '15px' }}>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULÁRIO VIP */}
      <section className="vip-section">
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>QUER ACESSO VIP?</h2>
        <div className="email-box">
          <input type="email" placeholder="SEU MELHOR E-MAIL" />
          <button className="send-btn"><MoveRight size={24} /></button>
        </div>
      </section>

      {/* FOOTER INTERESSANTE COM ANIMAÇÃO */}
      <footer className="footer-container">
        <div className="animation-box">
          <div className="rotating-cube"></div>
        </div>
        
        <div className="footer-content">
          <h3>VOGUEHUB — 2026</h3>
          <p>A MODA QUE CODIFICA O FUTURO.</p>
          <div className="footer-links">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>TIKTOK</span>
          </div>
        </div>
        
        <p className="copyright">© 2026 ALL RIGHTS RESERVED. EXPERIMENTAL LABORATORY.</p>
      </footer>

      <style>{`
        .trends-section { padding: 100px 5%; }
        .trends-grid { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .trend-card { cursor: pointer; width: 300px; max-width: 100%; }
        .trend-img { 
          width: 100%; height: 400px; background-size: cover; background-position: center;
          filter: grayscale(100%); transition: 0.5s ease;
        }
        .trend-card:hover .trend-img { filter: grayscale(0%); transform: scale(1.05); }
        
        .vip-section { padding: 50px 5% 100px 5%; text-align: center; }
        .email-box { display: inline-flex; border: 1px solid #333; padding: 5px; transition: 0.3s; width: 100%; max-width: 400px; }
        .email-box:hover { border-color: #ff3e3e; }
        .email-box input { background: none; border: none; padding: 15px; color: #fff; width: 100%; outline: none; }
        .send-btn { background: #ff3e3e; border: none; color: #fff; padding: 0 20px; cursor: pointer; }

        .footer-container { padding: 100px 5%; border-top: 1px solid #222; text-align: center; background: #050505; animation: footerReveal 1.5s ease-out; }
        @keyframes footerReveal { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        .animation-box { margin-bottom: 40px; perspective: 1000px; display: inline-block; }
        .rotating-cube { width: 50px; height: 50px; border: 2px solid #ff3e3e; animation: rotateCube 4s infinite linear; }
        @keyframes rotateCube { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        .footer-links { margin-top: 30px; display: flex; gap: 40px; justify-content: center; color: #666; cursor: pointer; flex-wrap: wrap; }
        .footer-links span:hover { color: #fff; }
        .copyright { margin-top: 50px; font-size: 0.6rem; color: #333; letter-spacing: 2px; }

        @media (max-width: 768px) {
            .vip-section h2 { font-size: 2rem !important; }
        }
      `}</style>
    </S.Container>
  );
}

export default Destaques;