import FormularioProfessor from "../../components/Professores/FormularioProfessor.jsx"

export default function PaginaCadastroProfessor(props) {
    return (
        <div className="pagina-cadastro">
            <h2>Cadastrar Professor</h2>
            <FormularioProfessor aoSalvar={props.aoSalvar} />
        </div>
    )
}