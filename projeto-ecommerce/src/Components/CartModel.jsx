import React, { useState } from "react";
import { useCart } from "../Context/CardContext";
import { X, Plus, Minus, Copy, Check } from "lucide-react";

export function CartModal() {
  const {
    carrinho,
    total,
    carrinhoAberto,
    setCarrinhoAberto,
    removerDoCarrinho,
    adicionarAoCarrinho,
  } = useCart();

  const [copiado, setCopiado] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  if (!carrinhoAberto) return null;

  const pixCopiaECola = `voguehub-pix-checkout-${total.toFixed(2)}-uniqueID99`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCopiaECola);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => setCarrinhoAberto(false)}
    >
      {/* Conteúdo do Carrinho */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "100vh",
          backgroundColor: "#fff",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ margin: 0 }}>Meu Carrinho</h2>
          <X
            size={24}
            cursor="pointer"
            onClick={() => setCarrinhoAberto(false)}
          />
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            carrinho.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.nome}
                  style={{
                    width: "70px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                    {item.nome}
                  </h4>
                  <p style={{ fontWeight: "bold", margin: "0 0 10px 0" }}>
                    R$ {(item.promo || item.preco).toFixed(2)}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <Minus
                      size={16}
                      cursor="pointer"
                      onClick={() => removerDoCarrinho(item.id)}
                    />
                    <span>{item.qtd}</span>
                    <Plus
                      size={16}
                      cursor="pointer"
                      onClick={() => adicionarAoCarrinho(item)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {carrinho.length > 0 && (
          <div style={{ borderTop: "2px solid #000", paddingTop: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Total:
              </span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                R$ {total.toFixed(2)}
              </span>
            </div>

            {!finalizado ? (
              <button
                onClick={() => setFinalizado(true)}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                FINALIZAR COMPRA
              </button>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Pague com PIX para liberar o pedido:
                </p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pixCopiaECola}`}
                  alt="QR Code Pix"
                  style={{ marginBottom: "15px" }}
                />
                <div style={{ display: "flex", gap: "5px" }}>
                  <input
                    readOnly
                    value={pixCopiaECola}
                    style={{
                      flex: 1,
                      padding: "8px",
                      fontSize: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <button
                    onClick={handleCopy}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {copiado ? (
                      <Check size={16} color="green" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                <button
                  onClick={() => setFinalizado(false)}
                  style={{
                    marginTop: "15px",
                    background: "none",
                    border: "none",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  Voltar para o carrinho
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
