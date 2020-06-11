FROM node:10

WORKDIR /usr/src/app

# set path to run packages from node_modules
ENV PATH /usr/src/app/node_modules/.bin$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]