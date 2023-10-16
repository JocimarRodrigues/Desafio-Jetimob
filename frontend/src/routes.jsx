import { useEffect, useState } from "react";
import "./App.css";
import { apiService } from "./services/apiService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import { LivrosProvider } from "./common/context/Livros";
import NovoLivro from "./pages/NovoLivro";

function AppRoutes() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const pegaDados = async () => {
      const livro = await apiService.pegaTodosOslivros();
      setLivros(livro);
    };
    pegaDados();
  }, []);

  console.log(livros);
  return (
    <>
      <BrowserRouter>
        <LivrosProvider>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<Home />} />
              <Route path="novoLivro" element={<NovoLivro />} />
            </Route>
          </Routes>
        </LivrosProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
