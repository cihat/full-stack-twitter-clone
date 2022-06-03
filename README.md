# Full Stack Twitter Clone

In the project, I am doing it to develop myself on the back-end side. I spend my experience and effort to become a full-stack developer using Node.js and mongoDB.

In this project, I preferred Node.js in Back-end, mongoDB as Service, object document mapper (ODM) mongoose, Vue.js and pug in Front-end, SCSS for styling. I'm thinking of deploying my project to Google Cloud.

## Running with Docker

```sh
$ docker-compose up
```

## Running without Docker

You must have mongoDB, node.js and npm installed on your computer.
Then, first, after the `cd backend` command, then the `npm i` or `npm install` command, if you are going to develop, you can restore the backend with the `npm watch ` command. If you have seen

```
started listening on http://localhost:3000/ in your terminal we are connected to mongoDB!!!🤪
```

if there is this command, it means its backend is working fine.

Then for the frontend, you can install the packages by saying `yarn` in the `frontend` folder, then you can raise the frontend with `yarn serve`. If there is no problem, you can completely restore the project at `http://localhost:8080/`.

## Running backend

```sh
$ cd backend
$ npm i
$ npm start
$ npm watch #run with nodemon for development
```

## Running frontend

```sh
$ cd frontend
$ yarn
$ yarn serve
```

Run `npm install` on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, `npm run lint` and `npm run lint-staged` that you can run on the root folder.

These commands run the individual `lint` and `lint-staged` scripts in both the `frontend` and the `backend` folders, and they will respect individual configurations of these folders.

### UML Diagram

![Class Diagram(Plant Uml)](https://user-images.githubusercontent.com/57585087/129368881-67e96d9b-2346-49d2-a288-05bae52aef1f.png)

![Basic version](https://user-images.githubusercontent.com/57585087/129048076-a2b17cc9-3bc5-4447-baaa-14100f64aa03.png)

![Basic-II version](https://user-images.githubusercontent.com/57585087/129362860-a552ed07-9426-4d87-9115-e35777793d8c.png)

The starter repository of this project has been forked from [dashersw/stack](https://github.com/dashersw/stack)

### Request end-points

```javascript
GET  http://localhost:3000/users HTTP/1.1

###

POST  https://cs-twitter-clone-backend.herokuapp.com/users HTTP/1.1
content-type: application/json

{"name": "John Doe", "handle": "@johnDoe", "email": "john_doe@twitter.com"}

###

DELETE  http://localhost:3000/users/611390360384a2befbbc7466 HTTP/1.1

###

GET http://localhost:3000/users/6113b3d9e2c6234211727249

###

POST    http://localhost:3000/users/617e978514928da134c12366/tweets HTTP/1.1
content-type: application/json

{"body": "This is a test tweet."}

###

PATCH   http://localhost:3000/users/6113a464e332bd183bf840d2 HTTP/1.1
content-type: application/json

{"name": "Cihat"}

###

PATCH   http://localhost:3000/users/611546eebd96a6a5e85c821d/following HTTP/1.1
content-type: application/json

{"userToFollowId": "6113dc26306ad96bcd30b251"}

###

PATCH   http://localhost:3000/users/612cea71e2e1167e4e1547ce/like HTTP/1.1
content-type: application/json

{"likeTweetId": "612cea85e2e1167e4e1547d1"}

###

PATCH   http://localhost:3000/users/6113dc26306ad96bcd30b251/retweet HTTP/1.1
content-type: application/json

{"retweetId": "6113de87306ad96bcd30b50b"}

###


GET  https://full-stack-twitter-clone-backend-i2smrx00x-cihat.vercel.app/users HTTP/1.1

###
```

------------------------------------

MIT License

Copyright (c) 2022 Cihat Salik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.