import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => {
      const existe = prev.find((i) => i.id === item.id);
      if (existe) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qtd: i.qtd + 1 } : i
        );
      }
      return [...prev, { ...item, qtd: 1 }];
    });
    setCarrinhoAberto(true);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qtd: i.qtd - 1 } : i))
          .filter((i) => i.qtd > 0)
    );
  };

  const total = carrinho.reduce((acc, i) => acc + (i.promo || i.preco) * i.qtd, 0);

  return (
    <CartContext.Provider value={{ 
      carrinho, 
      setCarrinho, 
      adicionarAoCarrinho, 
      removerDoCarrinho, 
      total, 
      carrinhoAberto, 
      setCarrinhoAberto 
    }}>
      {children}
    </CartContext.Provider>
  );
}

// O segredo está nesta linha abaixo para silenciar o erro do Vite:
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  
  return context;
}