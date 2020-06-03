FROM node:10

WORKDIR /usr/src/app

# set path to run packages from node_modules
ENV PATH /usr/src/app/node_modules/.bin$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]