FROM node:latest

RUN mkdir -p /usr/app/

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm install

COPY . /usr/app/

EXPOSE 3333

CMD [ "npm", "start" ]