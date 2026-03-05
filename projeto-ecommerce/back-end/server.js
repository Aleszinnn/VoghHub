import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = [];
const produtos = []; 

const ADMIN_CREDENTIALS = {
    email: "admin@voguehub.com",
    senha: "Admin@", 
    token: "voguehub-admin-secret-token-2026"
};

const verificarAdmin = (req, res, next) => {
    const adminToken = req.headers['admin-auth'];
    if (adminToken === ADMIN_CREDENTIALS.token) {
        next();
    } else {
        res.status(403).json({ message: "Acesso negado. Área exclusiva para o Administrador." });
    }
};

app.post('/admin/login', (req, res) => {
    const { email, senha } = req.body;
    if (email === ADMIN_CREDENTIALS.email && senha === ADMIN_CREDENTIALS.senha) {
        res.json({ message: "Login de Admin realizado!", token: ADMIN_CREDENTIALS.token });
    } else {
        res.status(401).json({ message: "E-mail ou senha de admin incorretos." });
    }
});

app.post('/usuarios', (req, res) => {
    const { nome, email, telefone, senha } = req.body;

    const regexSenha = /^(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!regexSenha.test(senha)) {
        return res.status(400).json({ message: "Senha inválida! Use 8 dígitos e 1 caractere especial." });
    }

    const emailExiste = usuarios.find(user => user.email === email);
    if (emailExiste) {
        return res.status(409).json({ message: "Este e-mail já está cadastrado em outra conta." });
    }

    // Validação extra de telefone
    const telefoneExiste = usuarios.find(user => user.telefone === telefone);
    if (telefoneExiste) {
        return res.status(409).json({ message: "Este telefone já está cadastrado em outra conta." });
    }

    const novoUsuario = { id: uuidv4(), nome, email, telefone, senha };
    usuarios.push(novoUsuario);
    
    // CORREÇÃO: Enviando o objeto 'user' para o front salvar no perfil
    res.status(201).json({ 
        message: "Conta criada com sucesso!", 
        user: { id: novoUsuario.id, nome, email, telefone } 
    });
});

app.post('/usuarios/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        res.json({ message: "Login realizado!", id: usuario.id });
    } else {
        res.status(401).json({ message: "E-mail ou senha incorretos." });
    }
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(user => user.id === id);

    if (usuario) {
        const { senha: _, ...dadosPublicos } = usuario;
        res.json(dadosPublicos);
    } else {
        res.status(404).json({ message: "Usuário não encontrado." });
    }
});

app.get('/usuarios', verificarAdmin, (req, res) => {
    res.json(usuarios);
});

app.delete('/usuarios/:id', verificarAdmin, (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(user => user.id === id);
    if (index === -1) return res.status(404).json({ message: "Usuário não encontrado." });
    
    usuarios.splice(index, 1);
    res.json({ message: "Usuário removido com sucesso." });
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.post('/produtos', verificarAdmin, (req, res) => {
    const { nome, preco, imagem, estoque } = req.body;
    const novoProduto = { id: uuidv4(), nome, preco, imagem, estoque };
    produtos.push(novoProduto);
    res.status(201).json({ message: "Produto adicionado!", produto: novoProduto });
});

app.delete('/produtos/:id', verificarAdmin, (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: "Produto não encontrado." });
    produtos.splice(index, 1);
    res.json({ message: "Produto removido." });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Back-end VogueHub ativo em http://localhost:${PORT}`);
});