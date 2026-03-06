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

export const InfiniteText = styled.div`
  padding: 80px 0;
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
  @media (max-width: 768px) {
    h2 { font-size: 4rem; }
  }
`;

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
  &:hover { filter: grayscale(0%); flex: 1.5; }
  @media (max-width: 1024px) { height: 400px; }
`;