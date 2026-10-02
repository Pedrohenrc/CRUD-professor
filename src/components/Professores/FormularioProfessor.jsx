import {useState} from "react";
import CampoTexto from "../CampoTexto.jsx";

export default function FormularioProfessor(props){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [disciplina, setDisciplina] = useState("");
    const [dataAdmissao , setDataAdmissao] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const professor = {
            nome: nome,
            email: email,
            cpf: cpf,
            disciplina: disciplina,
            dataAdmissao: dataAdmissao,
        }
        props.aoSalvar(professor);
        setNome("");
        setEmail("");
        setCPF("");
        setDisciplina("");
        setDataAdmissao("");
    }

return (
    <form className="formulario-aluno" onSubmit={handleSubmit}>
        <CampoTexto rotulo="nome" value={nome} aoAlterar={setNome}/>
        <CampoTexto rotulo="email" value={email} aoAlterar={setEmail}/>
        <CampoTexto rotulo="cpf" value={cpf} aoAlterar={setCPF}/>
        <CampoTexto rotulo="disciplina" value={disciplina} aoAlterar={setDisciplina}/>
        <CampoTexto rotulo="data_admissao" tipo="date" value={dataAdmissao} aoAlterar={setDataAdmissao}/>
        <button type="submit">Cadastro</button>
    </form>
)}