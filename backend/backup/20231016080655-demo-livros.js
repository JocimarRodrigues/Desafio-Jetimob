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
          imagem: "https://m.media-amazon.com/images/I/61zsH6UU0XL._AC_UF1000,1000_QL80_.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Harry Potter",
          autor: "JK",
          classificacao: 3,
          resenha: "lore",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2ktKxuVEdMyB3-EFTVQI21lQn_gRxf1eFA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Senhor dos Aneis",
          autor: "Tolkien",
          classificacao: 4,
          resenha: "lore",
          imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: "Star Wars",
          autor: "George Lucas",
          classificacao: 5,
          resenha: "lore",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_815569-MLB27971097340_082018-O.webp",
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
