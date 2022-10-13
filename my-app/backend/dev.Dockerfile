FROM node:16
ARG MONGO_URL
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV MONGO_URL=${MONGO_URL}

CMD ["npm", "run", "dev"]