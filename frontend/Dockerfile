FROM node:14.4.0-alpine3.11

WORKDIR /app

COPY package.json yarn.lock

RUN yarn 

COPY . .

EXPOSE 8080

CMD [ "yarn", "serve" ]