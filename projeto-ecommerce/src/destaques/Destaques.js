import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const Container = styled.div`
  background: #0a0a0a;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
`;

// --- TEXTO EM MOVIMENTO INFINITO ---
export const InfiniteText = styled.div`
  padding: 100px 0;
  white-space: nowrap;
  display: flex;
  border-bottom: 1px solid #333;
  overflow: hidden;
  
  h2 {
    font-size: 8rem;
    font-weight: 900;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    animation: ${marquee} 20s linear infinite;
    padding-right: 50px;
  }
`;

// --- GRID DE PRODUTOS "THE CHOSEN ONES" ---
export const HighlightSection = styled.section`
  display: flex;
  padding: 100px 5%;
  gap: 50px;
  @media (max-width: 1024px) { flex-direction: column; }
`;

export const FeaturedCard = styled.div`
  flex: 1;
  position: relative;
  height: 600px;
  background: url(${props => props.bg}) center/cover;
  border-radius: 5px;
  filter: grayscale(100%);
  transition: 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  display: flex;
  align-items: flex-end;
  padding: 40px;

  &:hover {
    filter: grayscale(0%);
    flex: 1.5;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  }
`;

// --- INTERATIVIDADE: O RADAR DE TENDÊNCIAS ---
export const RadarContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%);
  margin: 50px 0;
`;

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #333;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .point {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #ff3e3e;
    border-radius: 50%;
    box-shadow: 0 0 15px #ff3e3e;
  }
`;