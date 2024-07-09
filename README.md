# Sports Activities Web Application

Este é um projeto completo de uma aplicação para gerenciar atividades esportivas, incluindo um backend desenvolvido utilizando NestJS, MySQL e TypeScript, e um frontend desenvolvido utilizando React, Node.js e Tailwind CSS.

## Funcionalidades

- **Backend:**
- CRUD (Create, Read, Update, Delete) para atividades esportivas.
- Persistência de dados com MySQL.
- Utilização de DTOs para validação de dados.
- Implementação de Logger global.
- Autenticação JWT (JSON Web Token) básica.
- Documentação da API com Swagger.
- **Frontend:**
- SPA (Single Page Application) utilizando React.
- Estilização com Tailwind CSS e Preline UI.
- Páginas para listar, adicionar, visualizar detalhes, atualizar e deletar atividades esportivas.
- Roteamento com React Router.
- Modal com carrossel de imagens.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 12 ou superior)
- MySQL

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/NathaliaRezendet/sport-app.git
   ```
2. Instale as dependências:

   `npm install`

Configuração do Banco de Dados
--------------------------------

1. Crie um banco de dados MySQL.
2. Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto:

   `DB_HOST=localhost DB_PORT=3307 DB_USERNAME=userdb DB_PASSWORD=1234 DB_DATABASE=nome_do_seu_banco`
3. Execute as migrações para criar as tabelas no banco de dados:

   `npm run typeorm:migrate`
4. Caso as migrações não funcionem de o seguinte Create:

   CREATE TABLE `activity` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `description` varchar(255) NOT NULL,
   `date` datetime NOT NULL,
   PRIMARY KEY (`id`)
   ) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

   Exemplos de inserts:

   INSERT INTO `activity` (`name`, `description`, `date`) VALUES
   ('Futebol', 'Partida de futebol no campo do parque', '2024-07-15 10:00:00'),
   ('Basquete', 'Jogo de basquete na quadra da escola', '2024-07-16 15:00:00'),
   ('Corrida', 'Corrida de 5km na praia', '2024-07-17 06:30:00'),
   ('Natação', 'Treino de natação na piscina olímpica', '2024-07-18 09:00:00'),
   ('Yoga', 'Aula de yoga no centro comunitário', '2024-07-19 18:00:00');

Executando o Backend
--------------------

Para iniciar o servidor backend:

`npm run start`

O servidor estará disponível em `http://localhost:4000`.

Executando o Frontend
---------------------

1. Navegue até a pasta do frontend:

   `cd front`
2. Instale as dependências:

   `npm install`
3. Inicie o servidor frontend:

   `npm start`

O frontend estará disponível em `http://localhost:3000`.

Documentação da API
---------------------

A documentação da API está disponível via Swagger:

- URL: `http://localhost:4000/api`

Endpoints da API
----------------

- **Atividades Esportivas:**

  - **Criar uma nova atividade**

    - **POST** `/activities`
    - **Corpo da Requisição:**

      `{ "name": "Nome da Atividade", "description": "Descrição da Atividade", "date": "2024-07-10T14:00:00Z" }`
  - **Listar todas as atividades**

    - **GET** `/activities`
  - **Obter detalhes de uma atividade**

    - **GET** `/activities/:id`
  - **Atualizar uma atividade**

    - **PUT** `/activities/:id`
    - **Corpo da Requisição:**

      `{ "name": "Nome da Atividade Atualizado", "description": "Descrição da Atividade Atualizada", "date": "2024-07-11T14:00:00Z" }`
  - **Deletar uma atividade**

    - **DELETE** `/activities/:id`
- **Autenticação:**

  - **Registrar um novo usuário**

    - **POST** `/auth/register`
    - **Corpo da Requisição:**

      `{ "username": "seu_usuario", "password": "sua_senha" }`
  - **Login**

    - **POST** `/auth/login`
    - **Corpo da Requisição:**

      `{ "username": "seu_usuario", "password": "sua_senha" }`
  - **Obter informações do usuário autenticado**

    - **GET** `/auth/me`
    - **Cabeçalho da Requisição:**

      `Authorization: Bearer <seu_token_jwt>`

Estrutura do Projeto
--------------------

- **Backend:**

  - `src/`: Contém o código-fonte da aplicação.
    - `activity/`: Módulo de atividades esportivas.
      - `activity.controller.ts`: Controlador das rotas da API.
      - `activity.service.ts`: Lógica de negócio das atividades.
      - `activity.entity.ts`: Entidade das atividades.
      - `activity.dto.ts`: DTOs para validação de dados.
    - `auth/`: Módulo de autenticação.
      - `auth.service.ts`: Serviço de autenticação JWT.
      - `local.strategy.ts`: Estratégia de autenticação local.
      - `jwt.strategy.ts`: Estratégia de autenticação JWT.
    - `middlewares/`: Middlewares da aplicação.
      - `logger.middleware.ts`: Middleware para registro de logs.
    - `app.module.ts`: Módulo principal da aplicação.
    - `main.ts`: Arquivo de inicialização da aplicação.
- **Frontend:**

  - `src/`: Contém o código-fonte da aplicação.
    - `pages/`: Páginas da aplicação.
      - `ActivitiesListPage.jsx`: Página de listagem de atividades.
      - `AddActivityPage.jsx`: Página de adição de atividades.
    - `App.js`: Arquivo principal da aplicação.
    - `index.js`: Arquivo de entrada.
    - `ActivitiesListPage.css`: Estilizações para a página de listagem de atividades.

Licença
--------

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
