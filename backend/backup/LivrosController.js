
const database = require("../models");

class LivrosController {
  static async pegaTodosOsLivros(req, res) {
    try {
      const livros = await database.Livros.findAll();
      return res.status(200).json(livros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmLivro(req, res) {
    const {id} = req.params
    try {
        const livro = await database.Livros.findOne({where: {id: Number(id)}})
        if (!livro) {
            return res.status(404).json({message: `Livro ${id} não encontrado`})
        }
        return res.status(200).json(livro)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

  static async criaNovoLivro(req, res) {
    const dados = req.body;
    try {
      const novoLivroCriado = await database.Livros.create(dados);
      return res.status(200).json(novoLivroCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarLivro(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Livros.update(novasInfos, {
        where: {
          id: Number(id),
        },
      });
      const livroAtualizado = await database.Livros.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(livroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async excluirLivro(req, res) {
    const {id} = req.params;
    try {
        await database.Livros.destroy({where: {id: Number(id)}})
        return res.status(200).json({message: `Livro ${id} deletado com sucesso!`})
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = LivrosController;
