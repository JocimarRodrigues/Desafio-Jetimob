import api from "../api/api";

export const pegaTodosOslivros = async () => {
    try {
        const response = await api.get("/livros");
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const apiService = {
    pegaTodosOslivros
}