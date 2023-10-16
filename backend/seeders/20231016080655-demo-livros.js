"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Livros",
      [
        {
          titulo: "Game of Thrones",
          autor: "George",
          classificacao: 5,
          resenha: "lore",
          imagem: "",
          dataEdicao: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Harry Oitter",
          autor: "JK",
          classificacao: 3,
          resenha: "lore",
          imagem: "",
          dataEdicao: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Senhor dos Aneis",
          autor: "Tolkien",
          classificacao: 4,
          resenha: "lore",
          imagem: "",
          dataEdicao: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Star Wars",
          autor: "George Lucas",
          classificacao: 5,
          resenha: "lore",
          imagem: "",
          dataEdicao: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
