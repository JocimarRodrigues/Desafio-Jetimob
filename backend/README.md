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

