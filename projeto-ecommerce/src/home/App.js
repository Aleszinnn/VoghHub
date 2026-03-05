import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: 'Inter', sans-serif;
`;

// --- HEADER ---
export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const InterfaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000;
  text-decoration: none;
  span { color: #ff3e3e; }
`;

export const Nav = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const NavLink = styled.li`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: #666;
  transition: 0.3s;
  &:hover { color: #000; }
`;

// --- SEÇÕES ---
export const SectionTitle = styled.div`
  max-width: 1300px;
  margin: 80px auto 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  h2 { font-size: 1.8rem; text-transform: uppercase; letter-spacing: 1px; }
  hr { flex: 1; border: 0; border-top: 1px solid #eee; }
`;

export const ProductGrid = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
`;

// --- CARDS DE PRODUTO ---
export const Card = styled.div`
  position: relative;
  cursor: pointer;
  &:hover img { transform: scale(1.05); }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: #f6f6f6;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
`;

export const TagPromo = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff3e3e;
  color: #fff;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 800;
  border-radius: 4px;
  z-index: 2;
`;

export const ProductInfo = styled.div`
  text-align: left;
  h4 { font-size: 0.9rem; margin-bottom: 5px; color: #333; }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PriceOld = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.85rem;
`;

export const PriceCurrent = styled.span`
  color: #ff3e3e;
  font-weight: 800;
  font-size: 1.1rem;
`;

// --- FOOTER ---
export const Footer = styled.footer`
  background: #000;
  color: #fff;
  padding: 80px 20px 40px;
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

export const Newsletter = styled.div`
  background: #111;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 50px;
  input { 
    padding: 12px; width: 300px; border-radius: 4px; border: none; margin-right: 10px;
  }
  button {
    padding: 12px 25px; background: #ff3e3e; color: #fff; border: none; font-weight: bold; border-radius: 4px; cursor: pointer;
  }
`;