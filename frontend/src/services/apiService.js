import api from "../api/api";

export const pegaTodosOslivros = async () => {
  try {
    const response = await api.get("/livros");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const pegaUmLivro = async (id) => {
  try {
    const response = await api.get(`/livros/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const adicionarLivro = async (dados) => {
  try {
    const response = await api.post("/livros", dados);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarLivro = async (id, novasInfos) => {
  try {
    const response = await api.put(`/livros/${id}`, novasInfos);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const excluirLivro = async (id) => {
  try {
    const response = await api.delete(`/livros/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiService = {
  pegaTodosOslivros,
  pegaUmLivro,
  adicionarLivro,
  editarLivro,
  excluirLivro,
};
