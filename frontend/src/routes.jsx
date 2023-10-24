import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import { LivrosProvider } from "./common/context/Livros";
import NovoLivro from "./pages/NovoLivro";
import Livro from "./pages/DetalhesLivro";
import EditarLivro from "./pages/EditarLivro";
import { useEffect, useState } from "react";

function AppRoutes() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const auth = () => {
      const senha = import.meta.env.VITE_NAME;
      const senhaInserida = prompt("Digite a senha");
      if (senhaInserida === senha) {
        setAdmin(true);
      }
    };
    auth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <LivrosProvider>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={admin ? <Home /> : ""} />
              <Route path="novoLivro" element={admin ? <NovoLivro /> : ""} />
              <Route path="editarLivro/:id" element={admin ? <EditarLivro /> : ""} />
              <Route path="detalhesLivro/:id" element={admin ? <Livro /> : ""} />
            </Route>
          </Routes>
        </LivrosProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
