import { useEffect, useState } from "react";
import "./App.css";
import { apiService } from "./services/apiService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";

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
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
