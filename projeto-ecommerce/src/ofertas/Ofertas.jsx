import React, { useState, useEffect } from "react";
import {
  Timer,
  Calculator,
  MessageCircle,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Search,
  User,
  Instagram,
  Facebook,
  Twitter,
  Zap,
} from "lucide-react";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import {
  MainContainer,
  Header,
  InterfaceHeader,
  Logo,
  Nav,
  NavLink,
  FlashSaleBanner,
  TimerContainer,
  OffersGrid,
  WholesaleSection,
  RangeInput,
  BargainBox,
  InteractiveButton,
  DiscountBadge,
  Card,
  Footer,
  FooterContent,
} from "./Ofertas.js";
import { Link } from "react-router-dom";

// IMPORTAÇÕES DO CARRINHO
import { useCart } from "../Context/CardContext.jsx";
import { CartModal } from "../Components/CartModel.jsx";

function Oferts() {
  const [itemsQtd, setItemsQtd] = useState(1);

  // --- AJUSTE: Lógica de Login (para manter a sessão ao navegar) ---
  const userId = localStorage.getItem("@VogueHub:UserId");
  const adminToken = localStorage.getItem("@VogueHub:AdminToken");
  const rotaUsuario = adminToken ? "/admin" : (userId ? "/perfil" : "/cadastro");

  // --- AJUSTE: Lógica do Timer com Persistência ---
  const TEMPO_INICIAL_SEGUNDOS = 10 * 60 * 60;
  const STORAGE_KEY = "@VogueHub:FlashSaleTimer";

  const [segundosRestantes, setSegundosRestantes] = useState(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    return salvo ? parseInt(salvo, 10) : TEMPO_INICIAL_SEGUNDOS;
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosRestantes((prev) => {
        const novoTempo = prev <= 1 ? TEMPO_INICIAL_SEGUNDOS : prev - 1;
        localStorage.setItem(STORAGE_KEY, novoTempo.toString());
        return novoTempo;
      });
    }, 1000);
    return () => clearInterval(intervalo);
  });

  const formatarTempo = (totalSegundos) => ({
    h: String(Math.floor(totalSegundos / 3600)).padStart(2, "0"),
    m: String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, "0"),
    s: String(totalSegundos % 60).padStart(2, "0"),
  });

  const tempo = formatarTempo(segundosRestantes);

  // PEGANDO FUNÇÕES DO CONTEXTO
  const { adicionarAoCarrinho, setCarrinhoAberto, carrinho } = useCart();

  // Itens de Oferta Gerados
  const ofertasApenas = Array.from({ length: 8 }, (_, i) => ({
    id: `promo-${i}`,
    nome: `Premium Outlet Piece ${i + 1}`,
    preco: 149.9 + i * 10,
    precoOriginal: 299.9,
    img: `https://picsum.photos/400/500?random=sale${i}`,
  }));

  const calcularDescontoAtacado = () => {
    if (itemsQtd < 5) return 0;
    if (itemsQtd < 10) return 15;
    return 25;
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <CartModal />

      {/* HEADER INTEGRADO */}
      <Header>
        <InterfaceHeader>
          <Logo href="/">
            Vogue<span>Hub</span>
          </Logo>
          <Nav>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink>Home</NavLink>
            </Link>

            <Link to="/ofertas" style={{ textDecoration: "none" }}>
              <NavLink style={{ color: "#ff3e3e" }}>Ofertas</NavLink>
            </Link>

            <Link to="/destaques" style={{ textDecoration: "none" }}>
              <NavLink>Destaques</NavLink>
            </Link>
            <Link to="/sobre">
              <NavLink>Sobre</NavLink>
            </Link>
          </Nav>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Search size={20} cursor="pointer" />
            
            {/* AJUSTE: Rota dinâmica baseada no login */}
            <Link to={rotaUsuario}> 
              <User size={20} cursor="pointer" color={userId || adminToken ? "#ff3e3e" : "currentColor"} />
            </Link>

            <div
              onClick={() => setCarrinhoAberto(true)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <ShoppingBag size={20} />
              {carrinho.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: "#ff3e3e",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {carrinho.reduce((acc, item) => acc + item.qtd, 0)}
                </span>
              )}
            </div>
          </div>
        </InterfaceHeader>
      </Header>

      {/* SEÇÃO 1: FLASH SALE */}
      <FlashSaleBanner style={{ marginTop: "80px" }}>
        <Zap size={40} color="#ff3e3e" />
        <h2 style={{ letterSpacing: "2px" }}>OFERTAS RELÂMPAGO EXCLUSIVAS</h2>
        <TimerContainer>
          {tempo.h}h : {tempo.m}m : <span>{tempo.s}s</span>
        </TimerContainer>
        <p style={{ opacity: 0.7 }}>
          Estoque limitado. O desconto expira hoje!
        </p>
      </FlashSaleBanner>

      {/* SEÇÃO 2: GRID DE PRODUTOS */}
      <OffersGrid>
        {ofertasApenas.map((item) => (
          <Card key={item.id}>
            <DiscountBadge>
              SAVE {Math.round(100 - (item.preco / item.precoOriginal) * 100)}%
            </DiscountBadge>
            <div
              style={{
                overflow: "hidden",
                borderRadius: "8px",
                background: "#f5f5f5",
              }}
            >
              <img
                src={item.img}
                alt={item.nome}
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ padding: "15px 0" }}>
              <h4 style={{ fontSize: "0.9rem", marginBottom: "8px" }}>
                {item.nome}
              </h4>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    fontSize: "0.8rem",
                  }}
                >
                  R$ {item.precoOriginal.toFixed(2)}
                </span>
                <span
                  style={{
                    color: "#ff3e3e",
                    fontWeight: "800",
                    fontSize: "1.2rem",
                  }}
                >
                  R$ {item.preco.toFixed(2)}
                </span>
              </div>

              <InteractiveButton
                onClick={() => adicionarAoCarrinho(item)}
                style={{ width: "100%", marginTop: "15px", fontSize: "0.7rem" }}
              >
                Adicionar à Sacola
              </InteractiveButton>
            </div>
          </Card>
        ))}
      </OffersGrid>

      {/* SEÇÃO 3: SIMULADOR DE ATACADO */}
      <WholesaleSection>
        <Calculator size={40} color="#ff3e3e" />
        <h2 style={{ marginTop: "15px" }}>Simulador de Atacado</h2>
        <p>Arraste para ver seu desconto progressivo em tempo real:</p>
        <div style={{ margin: "40px 0" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: "900" }}>{itemsQtd}</h1>
          <p
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#999",
            }}
          >
            Peças no Carrinho
          </p>
          <RangeInput
            type="range"
            min="1"
            max="30"
            value={itemsQtd}
            onChange={(e) => setItemsQtd(e.target.value)}
          />
          <div
            style={{
              background: "#000",
              color: "#fff",
              padding: "15px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            VOCÊ GANHOU:{" "}
            <span style={{ color: "#ff3e3e", fontWeight: "bold" }}>
              {calcularDescontoAtacado()}% OFF EXTRA
            </span>
          </div>
        </div>
      </WholesaleSection>

      {/* SEÇÃO 4: NEGOCIAÇÃO DIRETA */}
      <BargainBox>
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <MessageCircle size={50} />
          <div>
            <h3 style={{ fontSize: "1.4rem" }}>
              VIP BARGAIN: Negocie seu preço
            </h3>
            <p style={{ color: "#666" }}>
              Vai levar mais de 10 peças? Peça um cupom exclusivo para o nosso
              time.
            </p>
          </div>
        </div>
        <InteractiveButton
          onClick={() => window.open("https://wa.me/seunumeroaqui")}
        >
          Negociar via WhatsApp
        </InteractiveButton>
      </BargainBox>

      {/* FOOTER */}
      <Footer>
        <FooterContent>
          <div>
            <Logo href="#" style={{ color: "#fff" }}>
              Vogue<span>Hub</span>
            </Logo>
            <p style={{ color: "#666", marginTop: "20px" }}>
              A curadoria definitiva para o seu guarda-roupa.
            </p>
          </div>
          <div>
            <h4>Categorias</h4>
            <p style={{ color: "#666", marginTop: "15px" }}>Outlet Masculino</p>
            <p style={{ color: "#666" }}>Sale Feminino</p>
          </div>
          <div>
            <h4>Atendimento</h4>
            <p style={{ color: "#666", marginTop: "15px" }}>Rastreamento</p>
            <p style={{ color: "#666" }}>Central de Ajuda</p>
          </div>
        </FooterContent>
        <p
          style={{
            textAlign: "center",
            marginTop: "80px",
            color: "#222",
            fontSize: "0.7rem",
          }}
        >
          © 2026 VogueHub Limited. All Rights Reserved.
        </p>
      </Footer>
    </MainContainer>
  );
}

export default Oferts;