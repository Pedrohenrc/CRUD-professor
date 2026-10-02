import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export async function getProfessores() {
    const response = await api.get('/professores');
    return response.data;
}

export async function addProfessor(professor) {
    return await api.post(`/professores/`, professor);
}

export async function deleteProfessor(id) {
    await api.delete(`/professores/` + id);
}