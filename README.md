# Aluga Santa Adélia


## Comandos GH
gh create repo nome_repositorio --public

gh repo clone nome_repositorio





Dockerfile
docker build -t jonasf/alugasantaadelia .

Executar imagem criada acima
docker run -p 3000:3000 -d jonasf/alugasantaadelia

Docker Compose
docker compose up


Criar aplicativo ReactJS
npx create-react-app my-app



## Instruções

Executar container MySQL
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql