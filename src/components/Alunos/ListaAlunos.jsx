import CardAluno from "./CardAluno.jsx";

function ListaAlunos(props) {
  const cards = [];

  for (let i = 0; i < props.alunos.length; i++) {
    const aluno = props.alunos[i];
    cards.push(
      <CardAluno
        key={aluno.id}
        aluno={aluno}
        aoExcluir={props.aoExcluir}
      />
    );
  }

  return (
    <div className="lista-alunos">
      {cards}
    </div>
  );
}

export default ListaAlunos;
