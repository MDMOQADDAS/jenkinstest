FROM node:lts-alpine3.17

WORKDIR /myapp

COPY * /myapp/

RUN npm i

EXPOSE 80

CMD ["node", "index.js"]