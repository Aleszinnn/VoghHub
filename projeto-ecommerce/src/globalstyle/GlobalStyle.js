import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset básico para evitar espaços indesejados */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
  }

  /* Configurações principais do corpo do site */
  body {
    background-color: #050505; /* Fundo Dark */
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Evita barra de rolagem horizontal */
  }

  /* Suaviza a rolagem da página quando clicar nos links do menu */
  html {
    scroll-behavior: smooth;
  }

  /* Estilização da barra de rolagem lateral (Scrollbar) para ficar com cara de site Gamer */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: #1a1a1a;
    border-radius: 10px;
    border: 1px solid #333;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00e676; /* Brilho verde ao passar o mouse no scroll */
  }

  /* Garante que botões e links tenham cursor de clique */
  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;