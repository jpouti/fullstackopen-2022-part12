FROM node:16

ARG MONGO_URL
ARG SECRET

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV MONGO_URL=${MONGO_URL}
ENV SECRET=${SECRET}

USER node

CMD npm start