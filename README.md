# Aluga Santa Adélia
Descrever as funcionalidades do aplicativo

# Instruções

## Pacotes de produção
npm install express
npm install cors
npm install dotenv
npm install mysql2

## Pacotes de desenvolvimento
npm install eslint -D
npm install nodemon -D


# DOCKER
## Criar e Executar container MySQL

$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

$ docker exec -it mysql bash
$ docker logs mysql

### create with data
$ docker exec mysql sh -c 'exec mysqldump --all-databases -uroot -p 3306:3306 "$MYSQL_ROOT_PASSWORD=root"' > ./create-db-template.sql 

### Restoring
$ docker exec -i mysql sh -c 'exec mysql -uroot -p 3306:3306 "$MYSQL_ROOT_PASSWORD=root"' < ./create-db-template.sql
## Dockerfile
docker build -t ass/api .

## Executar imagem criada acima
docker run -p 3333:3333 -d aas/api

## Docker Compose
docker compose up -d
docker compose down

## Comandos
docker stop
docker start
docker logs
docker inspect
docker volume ls
docker exec -it mysqldb bash

# FRONTEND
## Criar aplicativo ReactJS
npx create-react-app my-app



# GITHUB
## Comandos GH
gh create repo nome_repositorio --public
gh repo clone nome_repositorio




# Site
## com react puro
npx create-react app site

## com vite
npm create vite@latest
entrar na pasta criada
npm install
npm install react-icons
npm install react-router-dom

## executar
npm run dev (vite)
npm run start (react)

## criar component
rafce
