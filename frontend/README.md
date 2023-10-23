#### Importante

- Para o projeto funcionar é necessário que o servidor do back-end esteja ligado e funcionando, se não for o caso, leia o readme do front-end para realizar esta etapa.

# Arquitetura do Projeto

- O front-end vai consumir a api do back-end para realizar a lógica do projeto e mostrar os dados no navegador.
- No front-end foi utilizado as seguintes tecnologias => JavaScript, React, Sass, Context-Api, Axios.
- Seguindo uma estrutura padrao de react, o projeto foi desenvolvido, separados em componentes, estes responsáveis por realizar a lógica de obter os dados e enviar para o backend.
- No projeto foi usado o Axios, para se conectar com a API.
- Na pasta services, é onde foi realizada a lógica para obter e enviar os dados para a API.
- O componente formulário é o responsável por enviar e editar os dados da API.
- No projeto foi utilizado SASS para estilização.
- O projeto está responsivo na maioria das telas.

# Requisitos para rodar o projeto

- React.JS, JavaScript, SASS, Axios

# Como rodar o projeto localmente

- Na pasta frontend, abra o terminal e rode o comando npm install
- Rode o comando npm run dev
- Caso você queira mudar a url base da api, você vai fazer isso na pasta api/api.js
```js
import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3000" // Aqui é onde você vai informar a rota base da sua api
})

```

# Vídeo de Demonstração

https://github.com/JocimarRodrigues/Desafio-Jetimob/assets/116130103/c693b2ea-2dab-4b8b-8009-ef07b84c52b1