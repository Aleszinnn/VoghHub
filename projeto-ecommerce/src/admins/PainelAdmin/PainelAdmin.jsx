import React, { useEffect, useState } from "react";
import { Users, Trash2, ShieldCheck, RefreshCw, LogOut, Lock, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Controller from "../Controller/Controller.jsx"; // Verifique se o caminho está correto
import { GlobalStyle } from "../../globalstyle/GlobalStyle.js";
import { 
  AdminContainer, 
  TableCard, 
  StyledTable, 
  StatusBadge, 
  ActionButton 
} from "./AdminStyles.js";

function PainelAdmin() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const carregarDados = async () => {
    try {
      setLoading(true);
      const data = await Controller.listarUsuarios();
      setUsuarios(data);
      setErro(null);
    } catch (err) {
      // Captura o erro real vindo do Controller
      setErro(err || "Acesso Negado. Você não tem permissão de Administrador.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const handleDeletar = async (id) => {
    if (window.confirm("⚠️ Tem certeza que deseja remover este usuário? Esta ação não pode ser desfeita.")) {
      try {
        await Controller.deletarUsuario(id);
        carregarDados(); 
      } catch (err) {
        alert("Erro ao deletar: " + err);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@VogueHub:AdminToken");
    navigate("/login");
  };

  if (erro) {
    return (
      <AdminContainer>
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2 style={{ color: "#ff3e3e", marginBottom: "20px" }}>{erro}</h2>
          <ActionButton onClick={() => navigate("/login")} style={{ margin: "0 auto", padding: "10px 20px" }}>
            Voltar ao Login
          </ActionButton>
        </div>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <GlobalStyle />
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h1 style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.8rem" }}>
            <ShieldCheck color="#ff3e3e" size={32} /> Painel Administrativo
          </h1>
          <p style={{ color: "#666" }}>Controle total de usuários e credenciais</p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <ActionButton onClick={carregarDados} title="Sincronizar Dados" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <RefreshCw size={20} />}
          </ActionButton>
          <ActionButton onClick={handleLogout} style={{ background: "#000", color: "#fff", padding: "0 15px", gap: "8px" }}>
            <LogOut size={18} /> Sair
          </ActionButton>
        </div>
      </header>

      <TableCard>
        <div style={{ padding: "20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Users size={20} color="#ff3e3e" />
            <strong style={{ fontSize: "1.1rem" }}>Novos Usuários ({usuarios.length})</strong>
          </div>
          <StatusBadge style={{ background: "#f0f0f0", color: "#666" }}>Base de Dados Local</StatusBadge>
        </div>

        <StyledTable>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th><div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Lock size={14}/> Senha</div></th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 && !loading ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "50px", color: "#aaa" }}>
                  Aguardando novos cadastros...
                </td>
              </tr>
            ) : (
              usuarios.map((user) => (
                <tr key={user.id}>
                  <td style={{ fontWeight: "600" }}>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.telefone}</td>
                  <td style={{ fontFamily: "monospace", color: "#ff3e3e", fontSize: "0.9rem" }}>
                    {user.senha}
                  </td>
                  <td>
                    <ActionButton onClick={() => handleDeletar(user.id)} color="#ff3e3e" title="Excluir Usuário">
                      <Trash2 size={18} />
                    </ActionButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </StyledTable>
      </TableCard>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </AdminContainer>
  );
}

export default PainelAdmin;