# Trabalho Final - INF01006 Projeto de banco de dados (2024/01)

### Professor: Renata Galante

---

## Manual de Execução

Todos os comandos são executados a partir da pasta principal do projeto

### 1. Preparação dos Dados
Para gerar o arquivo do banco de dados, siga os passos abaixo:

1. Execute o comando:
   ```bash
     py -m pip install -r db/req.txt
     py db/parse_data.py
2. Um arquivo db.db será criado, ele deve estar na pasta ./server/prisma

### 2. Configuração do Servidor
1. Na pasta ./server, crie um arquivo .env com o seguinte conteúdo:
   ```bash
     DATABASE_URL="file:./db.db"  
   
2. No terminal, dentro da pasta ./server, execute os seguintes comandos:
   ```bash
    cd server
    npm install
    npx prisma generate
    npm run dev

### 3. Execução da Interface
1. Instale as dependências e inicie a aplicação com os comandos:
  ```bash
    cd card-generator
    npm install
    npm run dev
