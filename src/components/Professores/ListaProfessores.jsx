import CardProfessor from './CardProfessor';

export default function ListaProfessor(props){
    const cards = [];

    for (let i = 1; i < props.professores.length; i++){
        const professor = props.professores[i];
        cards.push(
            <CardProfessor
            key={professor.id}
            professor={professor}
            aoExcluir={props.aoExcluir}
            />
        )
    }

    return (
        <div className="ListaProfessores">
            {cards}
        </div>
    )
}