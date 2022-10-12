FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm i -G nodemon

RUN npm install

CMD ["npm", "run", "dev"]