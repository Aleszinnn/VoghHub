import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../Context/CardContext.jsx";
import App from "../home/App.jsx";
import Oferts from "../ofertas/Ofertas.jsx";
import Destaques from "../destaques/Destaques.jsx";
import Login from "../Login/Login.jsx";
import Cadastro from "../Register/Register.jsx";
import Logout from "../logout/Logout.jsx";
import PainelAdmin from "../admins/PainelAdmin/PainelAdmin.jsx";
import Perfil from "../Users/PageUsers.jsx";
import Sobre from "../sobre/sobre.jsx";

export function Router() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ofertas" element={<Oferts />} />
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sobre" element={<Sobre />}/>

          {/* Apenas os admins podem entrar nessas rotas... */}
          <Route path="/admin" element={<PainelAdmin />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
