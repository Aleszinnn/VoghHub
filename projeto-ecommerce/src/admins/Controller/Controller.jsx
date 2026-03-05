import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getAdminHeaders = () => {
  const token = localStorage.getItem("@VogueHub:AdminToken");
  return { headers: { "admin-auth": token } };
};

const Controller = {
  async criarUsuario(dadosUsuario) {
    try {
      const response = await api.post("/usuarios", dadosUsuario);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao criar conta";
    }
  },

  async loginUsuario(credenciais) {
    try {
      const response = await api.post("/usuarios/login", credenciais);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "E-mail ou senha incorretos";
    }
  },

  async loginAdmin(credenciais) {
    try {
      const response = await api.post("/admin/login", credenciais);
      if (response.data.token) {
        localStorage.setItem("@VogueHub:AdminToken", response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro no login de admin";
    }
  },

  async listarUsuarios() {
    try {
      const response = await api.get("/usuarios", getAdminHeaders());
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Acesso negado ao carregar usuários";
    }
  },

  async deletarUsuario(id) {
    try {
      const response = await api.delete(`/usuarios/${id}`, getAdminHeaders());
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao deletar usuário";
    }
  },

  async adicionarProduto(produto) {
    try {
      const response = await api.post("/produtos", produto, getAdminHeaders());
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao adicionar produto";
    }
  },

  async listarProdutos() {
    try {
      const response = await api.get("/produtos");
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao carregar produtos";
    }
  }
};

// CORREÇÃO: Export default para evitar erros de "requested module" no Vite
export default Controller;