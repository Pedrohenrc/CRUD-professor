import FormularioAluno from "../../components/Alunos/FormularioAluno.jsx";

function PaginaCadastro(props) {
  return (
    <div className="pagina-cadastro">
      <h2>Cadastrar aluno</h2>
      <FormularioAluno aoSalvar={props.aoSalvar} />
    </div>
  );
}

export default PaginaCadastro;
