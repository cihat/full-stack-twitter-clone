# get an operating system
# install node runtime
FROM  node:14.4.0-alpine3.11

WORKDIR /app

#copy files
COPY package.json package-lock.json ./

# install npm dependencies
RUN npm install

COPY . .

EXPOSE 3000

# run application
CMD [ "npm", "start" ]