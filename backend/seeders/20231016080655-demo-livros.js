"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Livros",
      [
        {
          titulo: "A fúria dos reis: As Crônicas de Gelo e Fogo, volume 2 ",
          autor: "George",
          classificacao: 5,
          resenha:
            "Em 'A Fúria dos Reis', o segundo livro da aclamada série 'As Crônicas de Gelo e Fogo' de George R.R. Martin, os leitores são levados de volta ao mundo complexo e brutal de Westeros. Enquanto os Sete Reinos enfrentam uma guerra civil sangrenta, novos personagens são introduzidos e alianças são forjadas e desfeitas. A trama é repleta de intrigas políticas, batalhas épicas e reviravoltas surpreendentes, mantendo os leitores à beira de seus assentos em uma narrativa rica em detalhes e personagens complexos. 'A Fúria dos Reis' é uma continuação envolvente que aprofunda a saga e deixa os leitores ansiosos por mais.",
          imagem:
            "https://m.media-amazon.com/images/I/61zsH6UU0XL._AC_UF1000,1000_QL80_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Harry Potter e a Ordem da Fênix",
          autor: "JK",
          classificacao: 4,
          resenha:
            "Em 'Harry Potter e a Ordem da Fênix', o quinto livro da icônica série de J.K. Rowling, os leitores são levados a um mundo de magia, mistério e amadurecimento. Harry Potter enfrenta desafios ainda maiores enquanto se prepara para o confronto iminente com o maligno Lorde das Trevas, Voldemort. Neste livro, os segredos do passado são revelados, novos personagens são introduzidos e a Ordem da Fênix, uma sociedade secreta de bruxos e bruxas, desempenha um papel crucial na luta contra as forças das trevas. A história explora temas de amizade, lealdade e o amadurecimento dos personagens, mantendo os leitores envolvidos em uma narrativa repleta de ação e emoção, à medida que Harry e seus amigos enfrentam desafios cada vez mais perigosos.",
          imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2ktKxuVEdMyB3-EFTVQI21lQn_gRxf1eFA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "O Senhor dos Aneis: O Retorno do Rei",
          autor: "Tolkien",
          classificacao: 4,
          resenha:
            "Em 'O Senhor dos Anéis: O Retorno do Rei', a obra épica de J.R.R. Tolkien chega ao seu grandioso clímax. Neste terceiro e último volume da trilogia, a Terra-média enfrenta seu momento decisivo na batalha final entre as forças do bem e do mal. Frodo e Sam continuam sua jornada para destruir o Um Anel, enquanto Aragorn, Legolas, Gimli e outros heróis se unem para enfrentar Sauron e seu exército. A narrativa é rica em detalhes, mitologia e personagens inesquecíveis, explorando temas de coragem, amizade e a luta pela preservação da esperança em um mundo sombrio. 'O Retorno do Rei' é uma conclusão épica que emociona e encanta, envolvendo os leitores em um desfecho grandioso e satisfatório para esta inigualável jornada literária.",
          imagem:
            "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "JavaScript: O Guia Definitivo",
          autor: "David Flanagan",
          classificacao: 5,
          resenha:
            "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer. Referência completa para programadores, JavaScript: O guia de?nitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente de?nidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor.Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.",
          imagem:
            "https://m.media-amazon.com/images/I/91z1xY4ppaL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
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
