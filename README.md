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
- [🧑🏽‍💻 Iniciando o projeto](#Iniciando)
- [🧑🏽‍💻 Exemplos de requisições](#Exemplos)
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

##### Pré-requisitos

- Docker

  ```sh
  https://www.docker.com/products/docker-desktop
  ```

- Docker-compose

  ```sh
  https://docs.docker.com/compose/
  ```

- npm

  ```sh
  npm install npm -g
  ```

- sequelize-cli

  ```sh
  npm install sequelize-cli -g
  ```
- eslint

  ```sh
  https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
  ```

- prettier

  ```sh
  https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
  ```

<hr>

### Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/WelissonLuca/ecommerce-api.git
# ou use a opção de download.

# Entre na pasta com 
$ cd ecommerce-api

# Instale as dependências
$ npm install ou yarn

# Inicie o docker-compose, para subir o container com mysql
$ docker-compose up -d # flag -d faz com que o container rode em segundo plano
# Verifique se o container esta rodando 
$ docker ps
# Caso não esteja rode o comando para iniciar ele
$ docker-compose start
# Crie o banco de dados e as tabelas utilizando os comandos
$ npx sequelize db:create # Criação do banco
$ npx sequelize db:migrate # Criação das tabelas
    
# Conexão com o banco de dados:
# altere o nome do arquivo .env.example para .env
# dentro dele passe suas credencias para conexão
# Caso va usar o docker não precisa alterar as credencias
# Popule o banco de dados usando o aquivo "seed.js":
$ npx sequelize db:seed:all 
# Rode a aplicação
$ npm start
```

Documentação da API

```url
http://localhost:3000/api-docs/
```

<img src="https://imgseed.xyz/img/1623334614486fd85.png" alt="Documentação Print">



Exemplos 
================

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

Para atualizar um produto faça uma requisição do tipo PUT na rota:

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
