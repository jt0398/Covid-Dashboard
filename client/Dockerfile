FROM node:10

WORKDIR /usr/src/app

# set path to run packages from node_modules
ENV PATH /usr/src/app/node_modules/.bin$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

RUN npm run build

# add app
COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]