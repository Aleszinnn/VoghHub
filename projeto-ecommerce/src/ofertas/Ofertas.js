import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #1a1a1a;
`;

// --- HEADER (Igual à Home) ---
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
  &:hover { color: #ff3e3e; }
`;

// --- SEÇÕES INTERATIVAS DE OFERTAS ---
export const FlashSaleBanner = styled.div`
  background: #000;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 70px; /* Compensa o Header fixo */
`;

export const TimerContainer = styled.div`
  display: flex;
  gap: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.5rem;
  font-weight: bold;
  span { color: #ff3e3e; animation: ${pulse} 1.5s infinite; }
`;

export const WholesaleSection = styled.section`
  max-width: 900px;
  margin: 80px auto;
  background: #fdfdfd;
  border: 2px dashed #ff3e3e;
  padding: 50px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;

export const RangeInput = styled.input`
  width: 100%;
  margin: 30px 0;
  accent-color: #ff3e3e;
  cursor: pointer;
`;

export const BargainBox = styled.div`
  background: #f8f8f8;
  padding: 40px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 60px auto;
  border-right: 8px solid #000;
`;

// --- GRID E CARDS ---
export const OffersGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1300px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const Card = styled.div`
  position: relative;
  transition: 0.3s;
  &:hover { transform: translateY(-5px); }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  background: #ff3e3e;
  color: #fff;
  padding: 6px 12px;
  font-weight: 800;
  top: 15px;
  right: 15px;
  border-radius: 4px;
  z-index: 5;
  font-size: 0.75rem;
`;

export const InteractiveButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #ff3e3e; }
`;

// --- FOOTER (Igual à Home) ---
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;