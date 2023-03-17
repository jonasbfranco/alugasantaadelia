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
## Executar container MySQL
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

## Dockerfile
docker build -t jonasf/alugasantaadelia .

## Executar imagem criada acima
docker run -p 3000:3000 -d jonasf/alugasantaadelia

## Docker Compose
docker compose up
docker compose down



# FRONTEND
## Criar aplicativo ReactJS
npx create-react-app my-app



# GITHUB
## Comandos GH
gh create repo nome_repositorio --public
gh repo clone nome_repositorio