<h1 align="center">Aplicação de uma RESP API utilizando Node.js e Express.js</h1>
<div align="center">
 <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/WelissonLuca/ecommerce-api?color=%2304D361&style=plastic">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/languages/code-size/WelissonLuca/ecommerce-api?style=plastic">

  <img alt="licensa" src="https://img.shields.io/github/license/WelissonLuca/ecommerce-api?style=plastic">

  <img src="https://img.shields.io/github/forks/WelissonLuca/ecommerce-api?style=plastic">

<a href="https://github.com/WelissonLuca/FoodFy/tree/master/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/WelissonLuca/ecommerce-api?style=plastic">
  </a>

</div>

## 📕 Índice

- [📋 Sobre](#Sobre)
- [🕹 Tecnologias](#Tecnologias)
- [🧑🏽‍💻 Iniciando o projeto](#Como_rodar_o_projeto)
- [👨🏽‍🔧 Contribuições](#Contribuições)
- [📝 Licença](#Licença)
- [🦸 Contatos](#Contatos)

<hr>

<!-- About -->

# Sobre

<p align="left"> Este projeto é uma RESP API de um e-commerce fictício, realizado durante o Gama Experience #37, o objetivo é aplicar os conhecimentos da arquitetura REST dentro de uma API. Utilizamos os métodos de listagem de produtos, busca por um produto especifico, postagem de um novo produto, atualização de produto, listagem de departamento e listagem associando cada departamento aos seus produtos.  </p>

<hr>

<!-- TECHNOLOGIES -->

# Tecnologias 

- [Mysql](https://www.mysql.com/)
- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Swagger](https://swagger.io/)
- [Eslint](https://eslint.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Git Commit Linter](https://www.npmjs.com/package/git-commit-msg-linter)

<hr>

<!-- TECHNOLOGIES -->

# Iniciando

Clone este repositório

```javascript
git clone https://github.com/WelissonLuca/ecommerce-api.git

```

Acesse a pasta do projeto, e instale as dependências usando no seu terminal o comando:

```npm
npm install ou yarn add
```

Crie um arquivo .env na raiz do projeto e adicione as informações do seu banco de dados, seguindo a seguinte estrutura:

```env

MYSQL_USERNAME = seu usuário
MYSQL_PASSWORD = sua senha
MYSQL_DATABASE = ecommerce_gama
MYSQL_HOST = localhost
MYSQL_PORT = porta que esta usando
MYSQL_DIALECT = 'mysql'
```

Inicie o projeto usando o comando:

```npm
npm start ou yarn start
```

Use os seguintes comandos para criar o schema, tabelas e adicionar valores:

```npm
npx sequelize db:create  Comando usado para criar o schema
npx sequelize db:migrate Comando usado para criar as tabelas
npx sequelize db:seed:all Comando usado para adicionar alguns valores pre setados no banco
```

Para a documentação, acesse esta rota com o projeto em execução

```url
http://localhost:3000/api-docs/
```

<details>
 <summary>Departamentos requisições</summary>
 Para criar um departamento faça uma requisição do tipo POST na rota:

```
http://localhost:3000/departaments
```

Envie pela requisição os dados:

```json
 "name": "Departament name"
```

Para listar todos os departamentos faça uma requisição do tipo GET na rota:

```url
http://localhost:3000/departaments
```

Para listar todos os produtos cadastrados em um departamento especifico faça uma requisição do GET passando o id do departamento desejado para a rota:

```url
http://localhost:3000/departaments/:id
```

</details>

<details>
<summary>Produtos Requisições</summary>
Para criar um produto faça uma requisição do tipo POST na rota:

```
http://localhost:3000/products
```

Envie pela requisição os dados:

```json
   "name": "product name",
   "description": "product description",
   "price": "1000",
   "is_available": "sim",
   "amount": 4,
   "departament": 1
```

Para listar todos os produtos faça uma requisição do tipo GET na rota:

```url
http://localhost:3000/products
```

Para listar um produto especifico faça uma requisição do tipo GET passando o id do produto desejado para a rota:

```url
http://localhost:3000/product/:id
```

</details>
<hr>

<!-- CONTRIBUTING -->

# Contribuições

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- LICENSE -->

# Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

# Contatos

| [<img src="https://avatars.githubusercontent.com/u/33432680?v=4" width="115"><br><small>@inglyd</small>](https://github.com/inglyd) | [<img src="https://avatars.githubusercontent.com/u/62263143?v=4" width="115"><br><sub>@WelissonLuca</sub>](https://github.com/WelissonLuca) |
| :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
