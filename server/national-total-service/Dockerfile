FROM node:12.18.0-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3003

CMD [ "node", "server.js" ]