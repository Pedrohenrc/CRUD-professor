import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacao from "./components/BarraNavegacao";
import MensagemErro from "./components/MensagemErro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListagem from "./pages/Aluno/PaginaListagem.jsx";
import PaginaCadastro from "./pages/Aluno/PaginaCadastro.jsx";
import PaginaListagemProfessores from "./pages/Professor/PaginaListagemProfessores.jsx";
import PaginaCadastroProfessor from "./pages/Professor/PaginaCadastroProfessor.jsx";
import { listarAlunos, criarAluno, excluirAluno } from "./services/alunoService";
import {addProfessor, getProfessores, deleteProfessor} from "./services/professorService.js";

const mensagemConexao = "Não foi possível conectar à API. Você esqueceu de iniciar o json-server? Rode: npx json-server --watch db.json --port 3000";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [erro, setErro] = useState("");
  const [professores, setProfessores] = useState([]);

  useEffect(function () {
    carregarAlunos();
    carregarProfessores();
  }, []);

  async function carregarAlunos() {
    try {
      const dados = await listarAlunos();
      setAlunos(dados);
      setErro("");
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function carregarProfessores(){
    try {
      const dados = await getProfessores();
      setProfessores(dados);
      setErro("");
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvarAluno(aluno) {
    try {
      await criarAluno(aluno);
      await carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluirAluno(id) {
    try {
      await excluirAluno(id);
      await carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoSalvarProfessor(professor){
    try {
      await addProfessor(professor)
      await carregarProfessores();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluirProfessor(id) {
    try {
      await deleteProfessor(id);
      await carregarProfessores();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  return (
    <div className="App">
      <header className="cabecalho-ifrn">
        <img
          src="/IFRN.png"
          alt="Logo IFRN"
          className="logo-ifrn"
          onError={function (e) { e.target.style.display = "none"; }}
        />
        <h1>Sistema Escolar — Cadastro de Alunos</h1>
      </header>
      <BarraNavegacao />
      <MensagemErro mensagem={erro} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/alunos" element={<PaginaListagem alunos={alunos} aoExcluir={aoExcluirAluno} />} />
        <Route path="/cadastro/alunos" element={<PaginaCadastro aoSalvar={aoSalvarAluno} />} />
        <Route path="/professores" element={<PaginaListagemProfessores professores={professores} aoExcluir={aoExcluirProfessor} />} />
        <Route path="/cadastro/professores" element={<PaginaCadastroProfessor aoSalvar={aoSalvarProfessor} />} />

      </Routes>
    </div>
  );
}

export default App;
