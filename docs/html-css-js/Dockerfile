FROM node:22-alpine3.20

WORKDIR /home/node/app

COPY package*.json ./

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
