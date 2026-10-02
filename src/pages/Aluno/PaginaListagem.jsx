import ListaAlunos from "../../components/Alunos/ListaAlunos.jsx";

function PaginaListagem(props) {
  return (
    <div className="pagina-listagem">
      <h2>Alunos cadastrados</h2>
      <ListaAlunos alunos={props.alunos} aoExcluir={props.aoExcluir} />
    </div>
  );
}

export default PaginaListagem;
