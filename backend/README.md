# Arquitetura do Projeto

- O backend foi criado com a ideia de ser uma api rest, para exportar os dados para o front-end.
- No Backend foi utilizado node.js, sequelize, express, mySQL.
- O projeto foi dividido em controllers, models, routes, seeders, migrations.
- Os controllers são os responsáveis por fazer as requisição da api e enviar as respostas, isso é: Lidar com os protocolos http.
- Os Models são os responsáveis por criar a estrutura das tabelas no banco de dados.
- Os Migrations são responsáveis para o backend enviar a estrutura das tabelas, para o banco.
- As Routes são os responsáveis por criarem as rotas para cada controller, assim deixando o código mais fácil de ler, em vez de ter uma rota única pra todos os controllers.
- Os Seeders são os responsáveis por popualarem o banco com dados iniciais, inserido antes do projeto ir ao ar.

# Requisitos para rodar o projeto

- Node.JS, Sequelize, mySQL, JavaScript.

# Como rodar o projeto localmente

## Configurando o Banco

- Você vai clonar o projeto para um local do seu computador com o comando =>  git clone https://github.com/JocimarRodrigues/Desafio-Jetimob.git
- Você tem que entrar na pasta "backend" e abrir o terminal lá, essa etapa é importante porque caso você abra o terminal na pasta principal não irá funcionar.
- Você precisar ter um banco de dados mySQL configurado e rodando.
- Caso você cumpra esse requisito você precisar ir na pasta config, no arquivo config.json e colocar as informações dele lá.

### Exemplo
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "jetimob",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- No pojeto eu estou usando a chave de developoment para informar os dados do meu banco, eles precisam estar exatos.

## Configurando o back-end

- Feito os passos acima, você vai usar o comando npm install, para instalar as dependências do projeto. (Importante lembrar que o terminal precisa estar aberto na pasta backend).
- Você vai usar o comando npx-sequelize cli db:migrate; para rodar as migrações e criar as tabelas no banco de dados.
- Você vai usar o comando npx-sequelize cli db:seed:all; para enviar todos os seeders e popular as tabelas com os dados, inseridos inicialmente("Esse requisito é opcional, caso você queira que seu projeto comece vazio e você mesmo popule o banco").
- Você vai usar o comando npm start para iniciar o projeto.


#### Concluindo todas as etapas acima, seu backend estará funcionando localmente.

# Vídeo de Demonstração

https://github.com/JocimarRodrigues/Desafio-Jetimob/assets/116130103/3d37580c-3ffe-4e89-91d0-d4c0e6ccce03

# Rotas da API

## GET

### http://localhost:3000/livros

- Vai pegar todos os livros registrados no banco

#### Exemplo
```json
[
    {
        "id": 1,
        "titulo": "A fúria dos reis: As Crônicas de Gelo e Fogo, volume 2 ",
        "autor": "George",
        "classificacao": 5,
        "resenha": "Em 'A Fúria dos Reis', o segundo livro da aclamada série 'As Crônicas de Gelo e Fogo' de George R.R. Martin, os leitores são levados de volta ao mundo complexo e brutal de Westeros. Enquanto os Sete Reinos enfrentam uma guerra civil sangrenta, novos personagens são introduzidos e alianças são forjadas e desfeitas. A trama é repleta de intrigas políticas, batalhas épicas e reviravoltas surpreendentes, mantendo os leitores à beira de seus assentos em uma narrativa rica em detalhes e personagens complexos. 'A Fúria dos Reis' é uma continuação envolvente que aprofunda a saga e deixa os leitores ansiosos por mais",
        "imagem": "https://m.media-amazon.com/images/I/61zsH6UU0XL._AC_UF1000,1000_QL80_.jpg",
        "createdAt": "2023-10-23T15:13:43.000Z",
        "updatedAt": "2023-10-23T15:13:43.000Z"
    },
    {
        "id": 2,
        "titulo": "Harry Potter e a Ordem da Fênix",
        "autor": "JK",
        "classificacao": 4,
        "resenha": "Em 'Harry Potter e a Ordem da Fênix', o quinto livro da icônica série de J.K. Rowling, os leitores são levados a um mundo de magia, mistério e amadurecimento. Harry Potter enfrenta desafios ainda maiores enquanto se prepara para o confronto iminente com o maligno Lorde das Trevas, Voldemort. Neste livro, os segredos do passado são revelados, novos personagens são introduzidos e a Ordem da Fênix, uma sociedade secreta de bruxos e bruxas, desempenha um papel crucial na luta contra as forças das trevas. A história explora temas de amizade, lealdade e o amadurecimento dos personagens, mantendo os leitores envolvidos em uma narrativa repleta de ação e emoção, à medida que Harry e seus amigos enfrentam desafios cada vez mais perigosos.",
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2ktKxuVEdMyB3-EFTVQI21lQn_gRxf1eFA&usqp=CAU",
        "createdAt": "2023-10-23T15:13:43.000Z",
        "updatedAt": "2023-10-23T15:13:43.000Z"
    },
    {
        "id": 3,
        "titulo": "O Senhor dos Aneis: O Retorno do Rei",
        "autor": "Tolkien",
        "classificacao": 4,
        "resenha": "Em 'O Senhor dos Anéis: O Retorno do Rei', a obra épica de J.R.R. Tolkien chega ao seu grandioso clímax. Neste terceiro e último volume da trilogia, a Terra-média enfrenta seu momento decisivo na batalha final entre as forças do bem e do mal. Frodo e Sam continuam sua jornada para destruir o Um Anel, enquanto Aragorn, Legolas, Gimli e outros heróis se unem para enfrentar Sauron e seu exército. A narrativa é rica em detalhes, mitologia e personagens inesquecíveis, explorando temas de coragem, amizade e a luta pela preservação da esperança em um mundo sombrio. 'O Retorno do Rei' é uma conclusão épica que emociona e encanta, envolvendo os leitores em um desfecho grandioso e satisfatório para esta inigualável jornada literária.",
        "imagem": "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
        "createdAt": "2023-10-23T15:13:43.000Z",
        "updatedAt": "2023-10-23T15:13:43.000Z"
    },
    {
        "id": 4,
        "titulo": "JavaScript",
        "autor": "David Flanagan",
        "classificacao": 5,
        "resenha": "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer. Referência completa para programadores, JavaScript: O guia de?nitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente de?nidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor.Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.",
        "imagem": "https://http2.mlstatic.com/D_NQ_NP_815569-MLB27971097340_082018-O.webp",
        "createdAt": "2023-10-23T15:13:43.000Z",
        "updatedAt": "2023-10-23T15:13:43.000Z"
    }
]
```

### http://localhost:3000/livros:id

- Vai pegar todos um livro pelo id, informar o id como parametro.

### Exemplo

```json
{
    "id": 4,
    "titulo": "JavaScript",
    "autor": "David Flanagan",
    "classificacao": 5,
    "resenha": "JavaScript é a linguagem de programação da Web. A maioria dos sites modernos usa JavaScript, e todos os navegadores – em computadores de mesa, consoles de jogos, tablets e smartphones – incluem interpretadores JavaScript. Isso a torna uma das linguagens de programação mais importantes atualmente e uma das tecnologias que todo desenvolvedor Web deve conhecer. Referência completa para programadores, JavaScript: O guia de?nitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente de?nidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor.Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.",
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_815569-MLB27971097340_082018-O.webp",
    "createdAt": "2023-10-23T15:13:43.000Z",
    "updatedAt": "2023-10-23T15:13:43.000Z"
}
```


## POST

### http://localhost:3000/livros

- Protocolo para enviar os dados do livro, para o banco.

#### Exemplo

```json
{
    "titulo": "PHP Web Services",
    "autor": " Lorna Mitchell",
    "classificacao": 5,
    "resenha": "Descricao do Livro",
    "imagem": "Link da imagem"
}
```

## PUT

### http://localhost:3000/livros:id

- Protocolo para editar um livro do banco, necessário enviar ID do livro por parametro.

#### Exemplo

```json
{
    "titulo": "PHP",
    "autor": "Lorna",
    "classificacao": 5,
    "resenha": "Descricao do Livro",
    "imagem": "Link da imagem"
}
```

## DELETE

### http://localhost:3000/livros:id

- Protocolo para excluir um livro do banco, necessário enviar ID do livro por parametro.
