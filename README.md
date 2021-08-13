# Full Stack Twitter Clone

In the project, I am doing it to develop myself on the back-end side. I spend my experience and effort to become a full-stack developer using Node.js and mongoDB.

In this project, I preferred Node.js in Back-end, mongoDB as Service, object document mapper (ODM) mongoose, Vue.js and pug in Front-end, SCSS for styling. I'm thinking of deploying my project to Google Cloud.

## Running the Twitter Clone

```sh
$ docker-compose up
```

# Running without Docker

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

![plant uml ](https://github.com/cihat/full-stack-twitter-clone/blob/master/architecture/ClassDiagram.svg)

![Basic version](https://user-images.githubusercontent.com/57585087/129048076-a2b17cc9-3bc5-4447-baaa-14100f64aa03.png)

![Basic-II version](https://user-images.githubusercontent.com/57585087/129362860-a552ed07-9426-4d87-9115-e35777793d8c.png)
