FROM node:12.18.0-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

# add app
COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]