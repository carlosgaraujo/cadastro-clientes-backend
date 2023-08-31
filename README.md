# cadastro-clientes-backend
# Documentação do Backend - Aplicação Express

## Introdução

Bem-vindo à documentação do backend da nossa aplicação. Esta documentação tem como objetivo fornecer informações sobre a estrutura, rotas da API, configuração e outros aspectos relevantes do nosso sistema.

## Configuração

Antes de começar a trabalhar no backend, é importante configurar o ambiente de desenvolvimento corretamente.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

npm install
PORT=3000
DATABASE_URL=mongodb://localhost:27017/nome-do-banco

npm start


Arquitetura
O backend é construído usando o framework Express e segue uma arquitetura MVC (Model-View-Controller).

app.js: Ponto de entrada da aplicação.
routes/: Contém as definições das rotas da API.
controllers/: Controladores para lidar com a lógica de negócios.
models/: Modelos de dados para interagir com o banco de dados.
middlewares/: Middlewares personalizados.
Rotas/APIs
GET /api/users
Obtém a lista de todos os usuários cadastrados.



