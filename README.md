3 Aluga Santa Adélia


Dockerfile
docker build -t jonasf/alugasantaadelia .

Executar imagem criada acima
docker run -p 3000:3000 -d jonasf/alugasantaadelia

Docker Compose
docker compose up


Criar aplicativo ReactJS
npx create-react-app my-app