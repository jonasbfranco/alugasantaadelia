FROM node:16.19.1-alpine

WORKDIR /app

COPY /backend/package*.json ./

RUN cd backend

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]