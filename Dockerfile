FROM node:17-alpine3.14

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY . /user/src/app
RUN yarn

EXPOSE 3000

CMD ["node", "index.js"]