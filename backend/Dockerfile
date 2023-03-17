FROM node:16.19.1-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]