import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cadastro/alunos">Cadastrar aluno</Link>
        <Link to="/professores">Professor</Link>
        <Link to="/cadastro/professores">Cadastrar professor</Link>
    </nav>
  );
}

export default BarraNavegacao;
