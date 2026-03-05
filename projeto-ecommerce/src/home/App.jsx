import React from "react";
import {
  ShoppingBag,
  User,
  Search,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { GlobalStyle } from "../globalstyle/GlobalStyle.js";
import {
  MainContainer,
  Header,
  InterfaceHeader,
  Logo,
  Nav,
  NavLink,
  SectionTitle,
  ProductGrid,
  Card,
  ImageWrapper,
  TagPromo,
  ProductInfo,
  PriceContainer,
  PriceOld,
  PriceCurrent,
  Footer,
  FooterContent,
  Newsletter,
} from "./App.js";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CardContext.jsx";
import { CartModal } from "../Components/CartModel.jsx";

function App() {
  const { adicionarAoCarrinho, setCarrinhoAberto, carrinho } = useCart();

  // --- CÓDIGO ADICIONADO ---
  const userId = localStorage.getItem("@VogueHub:UserId");
  const adminToken = localStorage.getItem("@VogueHub:AdminToken");
  
  // Decide a rota do ícone de usuário
  const rotaUsuario = adminToken ? "/admin" : (userId ? "/perfil" : "/cadastro");
  // -------------------------

  const gerarItens = (prefixo, qtd, precoBase) =>
    Array.from({ length: qtd }, (_, i) => ({
      id: `${prefixo}-${i}`,
      nome: `${prefixo} Collection Item ${i + 1}`,
      preco: precoBase + i * 10,
      promo: i % 3 === 0 ? precoBase - 20 : null,
      img: `https://picsum.photos/400/500?random=${prefixo}${i}`,
    }));

  const masc = gerarItens("Masculino", 10, 120);
  const fem = gerarItens("Feminino", 10, 150);
  const kids = gerarItens("Kids", 20, 80);

  const ProductCard = ({ item }) => (
    <Card>
      <ImageWrapper>
        {item.promo && <TagPromo>OFERTA</TagPromo>}
        <img src={item.img} alt={item.nome} />
      </ImageWrapper>
      <ProductInfo>
        <h4>{item.nome}</h4>
        <PriceContainer>
          {item.promo ? (
            <>
              <PriceOld>R$ {item.preco.toFixed(2)}</PriceOld>
              <PriceCurrent>R$ {item.promo.toFixed(2)}</PriceCurrent>
            </>
          ) : (
            <PriceCurrent style={{ color: "#000" }}>
              R$ {item.preco.toFixed(2)}
            </PriceCurrent>
          )}
        </PriceContainer>
        <button
          onClick={() => adicionarAoCarrinho(item)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          ADICIONAR AO CARRINHO
        </button>
      </ProductInfo>
    </Card>
  );

  return (
    <MainContainer>
      <GlobalStyle />
      <CartModal />

      <Header>
        <InterfaceHeader>
          <Logo href="#">
            Vogue<span>Hub</span>
          </Logo>
          <Nav>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/ofertas" style={{ textDecoration: "none" }}>
              <NavLink>Ofertas</NavLink>
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

            {/* --- ROTA DINÂMICA --- */}
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

      <div style={{ paddingTop: "100px" }}>
        <Newsletter>
          <h2 style={{ color: "#fff", marginBottom: "15px" }}>
            Ganhe 15% de desconto na primeira compra
          </h2>
          <input type="text" placeholder="Seu melhor e-mail" />
          <button>INSCREVER</button>
        </Newsletter>

        <SectionTitle>
          <h2>Mundo Masculino</h2>
          <hr />
        </SectionTitle>
        <ProductGrid>
          {masc.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ProductGrid>

        <SectionTitle>
          <h2>Tendências Femininas</h2>
          <hr />
        </SectionTitle>
        <ProductGrid>
          {fem.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ProductGrid>

        <SectionTitle>
          <h2>Linha Infantil (Kids)</h2>
          <hr />
        </SectionTitle>
        <ProductGrid>
          {kids.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ProductGrid>
      </div>

      <Footer>
        <FooterContent>
          <div>
            <h3>VogueHub</h3>
            <p style={{ color: "#666", marginTop: "15px" }}>
              A moda que define você. Qualidade e estilo em cada detalhe.
            </p>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <Instagram size={20} /> <Facebook size={20} />{" "}
              <Twitter size={20} />
            </div>
          </div>
          <div>
            <h4>Categorias</h4>
            <p style={{ color: "#666", marginTop: "10px" }}>Inverno 2026</p>
            <p style={{ color: "#666" }}>Streetwear</p>
            <p style={{ color: "#666" }}>Acessórios</p>
          </div>
          <div>
            <h4>Suporte</h4>
            <p style={{ color: "#666", marginTop: "10px" }}>
              Trocas e Devoluções
            </p>
            <p style={{ color: "#666" }}>Termos de Uso</p>
            <p style={{ color: "#666" }}>FAQ</p>
          </div>
        </FooterContent>
        <p style={{ textAlign: "center", marginTop: "60px", color: "#333" }}>
          © 2026 VogueHub. Criado para mentes brilhantes.
        </p>
      </Footer>
    </MainContainer>
  );
}

export default App;