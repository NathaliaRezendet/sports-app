
Sports Activities Backend
=========================

Este é o backend de uma aplicação para gerenciar atividades esportivas, desenvolvido utilizando NestJS, MySQL, e TypeScript.

Funcionalidades
---------------

- CRUD (Create, Read, Update, Delete) para atividades esportivas.
- Persistência de dados com MySQL.
- Utilização de DTOs para validação de dados.
- Implementação de Logger global.
- Autenticação JWT (JSON Web Token) básica.
- Documentação da API com Swagger.

Pré-requisitos
---------------

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 12 ou superior)
- MySQL

Instalação
------------

1. Clone o repositório:

   `git clone <URL_DO_SEU_REPOSITORIO> cd sports-activities-backend`
2. Instale as dependências:

   `npm install`

Configuração do Banco de Dados
--------------------------------

1. Crie um banco de dados MySQL.
2. Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto:

   `DB_HOST=localhost DB_PORT=3306 DB_USERNAME=root DB_PASSWORD=sua_senha DB_DATABASE=nome_do_seu_banco`
3. Execute as migrações para criar as tabelas no banco de dados:

   `npm run typeorm:migrate`

Executando o Servidor
---------------------

Para iniciar o servidor:

`npm run start:dev`

O servidor estará disponível em `http://localhost:3000`.

Documentação da API
---------------------

A documentação da API está disponível via Swagger:

- URL: `http://localhost:3000/api`

Estrutura do Projeto
--------------------

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

Contribuição
--------------

Sinta-se à vontade para contribuir com melhorias neste projeto. Abra uma issue para discutir novas funcionalidades ou envie um pull request com suas alterações.

Licença
--------

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
