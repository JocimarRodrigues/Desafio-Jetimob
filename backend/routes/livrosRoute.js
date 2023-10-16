const { Router } = require("express");
const LivrosController = require("../controllers/LivrosController.js");

const router = Router();

router.get("/livros", LivrosController.pegaTodosOsLivros)
router.get("/livros/:id", LivrosController.pegaUmLivro)
router.post("/livros", LivrosController.criaNovoLivro)
router.put("/livros/:id", LivrosController.atualizarLivro)
router.delete("/livros/:id", LivrosController.excluirLivro)

module.exports = router;