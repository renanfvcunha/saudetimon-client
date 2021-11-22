<img
  src="./public/assets/images/logo.png"
  width="500"
  style="display: block; margin-left: auto; margin-right: auto;"
/>

# Saúde Timon 24h - Web Client

## Sobre o Projeto

O aplicativo Saúde Timon 24h permite aos usuários realizar o cadastro para a
vacinação contra a Covid-19 na cidade de Timon-MA.

Dentre as funcionalidades estão o cadastro para a vacinação por grupos, checagem
do status do cadastro, consulta a locais de vacinação, entre outros.

O projeto atual é um cliente web desenvolvido para o público realizar a interação
necessária com o sistema, utilizando os conceitos de mobile-first.

Demonstração: https://www.saudetimon24h.com.br/

## Tecnologias e Estrutura
O projeto foi escrito utilizando as seguintes tecnologias:

* Linguagem: [Typescript](https://www.typescriptlang.org/)
* Framework: [NextJS](https://nextjs.org/)
* Biblioteca de Componentes: [Material-UI v4](https://v4.mui.com/pt/)

O projeto foi desenvolvido utilizando os padrões de escrita que acompanham o
framwork. Dentre as pastas do projeto, se destacam:

* public: Pasta que contém os arquivos públicos da aplicação.
* src: Pasta principal que contém todos os arquivos importantes do projeto.
* src/components: Pasta onde se localizam componentes reutilizáveis.
* src/pages: Pasta que contém as páginas do sistema, utilizadas pelo roteamento
  do NextJS.
* src/services: Pasta que contém os providers utilizados no sistema.
* src/utils: Pasta que contém funções utilitárias.
* interfaces.ts: Arquivo de exportações de tipagens estáticas utilizadas no sistema.

## Como executar o projeto
### Desenvolvimento
1. Instalar as dependências.
```bash
$ npm i

$ yarn
```

2. Copiar o arquivo .env.example nomeando como .env e setar as variáveis de
  ambiente necessárias.

3. Iniciar o projeto
```bash
$ npm run dev

$ yarn dev
```

4. Após isso o projeto estará pronto para ser utilizado em desenvolvimento.

### Produção
1. Instalar as dependências.
```bash
$ npm i

$ yarn
```

2. Copiar o arquivo .env.example nomeando como .env e setar as variáveis de
  ambiente necessárias.

3. Gerar a build de produção
```bash
$ npm run build

$ yarn build
```

3. Iniciar o projeto
```bash
$ npm run start

$ yarn start
```

4. Após isso o projeto estará pronto para ser utilizado em produção.