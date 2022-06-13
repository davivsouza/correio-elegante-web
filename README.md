
<p align="center">
  <a href="#">
    <img src="./src/assets/logo.svg" height="auto" width="auto" alt="Correio Elegante" />
  </a>
</p>

<h1 align="center">Correio Elegante</h1>
<p align="center">🚀Projeto que simula um correio elegante feito junto com <a href="https://github.com/VictorRocha-dev">Victor Souza Rocha</a>.</p>

<div align="center">
  <img  src="https://img.shields.io/github/issues/davivsouza/correio-elegante-web"/>
  <img  src="https://img.shields.io/github/forks/davivsouza/correio-elegante-web"/>
  <img  src="https://img.shields.io/github/stars/davivsouza/correio-elegante-web"/>
</div>

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#pre-req">Pré-requisitos</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#license">License</a>
</p>
<h4 align="center"> 
	🚧  Correio Elegante 🚀 Concluído.  🚧
</h4>


<h3 id="objetivo">Objetivo 🎯</h3>

Desenvolver um site que simula um correio elegante, onde o usuário possa enviar, receber e ler as mensagens. Assim como também para estudar e aplicar tudo  que aprendi na NLW Together da Rocketseat. 

<br>

<h3 id="funcionalidades">Funcionalidades</h3>

- [x] Criar um botão de login com Google.
  - [x] Direciona o usuário para Home.
- [x] Um forms que o usuário insira todas as informações requisitadas e envie sua mensagem para qualquer usuário logado no site.
- [x] Inbox para ver as mensagens recebidas de outras usuários.
- [x] Responsividade.

Link do site [neste link](https://correio-elegante-web.vercel.app/)


<h3 id="pre-req">Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina o
[Git](https://git-scm.com) e o [NodeJS](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a parte WEB na sua máquina

```bash
# Clone este repositório
$ git clone https://github.com/davivsouza/correio-elegante-web.git

# Acesse a pasta do projeto no terminal/cmd
$ cd correio-elegante-web

#Execute em modo desenvolvimento
$ npm run dev
 
# O localhost inciará na porta:3000 - acesse <http://localhost:3000>

```
OBS: Esse projeto foi feito com uso do Firebase. 
Faça seu registro e crie um projeto [aqui](https://console.firebase.google.com), e preencha os dados de "services/firebase-config.ts" com as informações do projeto que você criou.
### 🎲 Rodando o servidor (Back-end)

```bash
# Clone este repositório
$ git clone https://github.com/davivsouza/correio-elegante-server.git

# Acesse a pasta do projeto no terminal/cmd
$ cd correio-elegante-server

# Instale as dependências
$ npm install

#Fazer a migration do banco
$ npx prisma migrate dev

#Execute em modo desenvolvimento
$ npm run dev
# O localhost inciará na porta:4003 - acesse <http://localhost:4003>

```

<h1 id="tecnologias">🛠 Tecnologias</h1>

As seguintes tecnologias foram usadas na construção do projeto:
### Front-end:
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/docs)
- [Axios](https://github.com/axios/axios)
- [Firebase](https://console.firebase.google.com/)
### Back-end:
- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Express](https://expressjs.com/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Prisma](https://www.prisma.io/)


<h1 id="autor">Autor</h1>

<a href="https://github.com/davivsouza/">
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGLZpA0YGZtCg/profile-displayphoto-shrink_200_200/0/1649967368945?e=1655942400&v=beta&t=aleGZbV_ZmechChGAZW0g4iiaZsuuP0Dkd03mtoggfo" width="100px;" alt=""/>
 <br />
 <sub><b>Davi Souza</b></sub></a> <a href="https://github.com/davivsouza/" title="Davi V. Souza">🕊</a>



Feito com 💜 por Davi V. Souza  👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Davi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/davi-vasconcelos-souza-236170234/)](https://www.linkedin.com/in/davi-vasconcelos-souza-236170234/) 
[![Gmail Badge](https://img.shields.io/badge/-davivasconcelossouza21@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:davivasconcelossouza21@gmail.com)](mailto:davivasconcelossouza21@gmail.com)

<h1 id="license">License</h1>
MIT