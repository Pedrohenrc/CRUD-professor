import ListaProfessores from "../../components/Professores/ListaProfessores.jsx";

export default function PaginaListagemProfessores(props) {
    return (
        <div className="pagina-listagem">
            <h2>listagem de professores</h2>
            <ListaProfessores professores={props.professores} aoExcluir={props.aoExcluir} />
        </div>
    )
}