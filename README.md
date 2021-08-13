# Full Stack Twitter Clone

In the project, I am doing it to develop myself on the back-end side. I spend my experience and effort to become a full-stack developer using Node.js and mongoDB.

In this project, I preferred Node.js in Back-end, mongoDB as Service, object document mapper (ODM) mongoose, Vue.js and pug in Front-end, SCSS for styling. I'm thinking of deploying my project to Google Cloud.

## Running the Twitter Clone

```sh
$ docker-compose up
```

# Running tests

## Running backend tests

```sh
$ cd backend
$ npm i
$ npm test
```

## Running frontend tests

```sh
$ cd frontend
$ npm i
$ npm test:unit
$ npm test:e2e
```

# Linting

Run `npm install` on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, `npm run lint` and `npm run lint-staged` that you can run on the root folder.

These commands run the individual `lint` and `lint-staged` scripts in both the `frontend` and the `backend` folders, and they will respect individual configurations of these folders.

### UML Diagram

![plant uml ](https://raw.githubusercontent.com/cihat/full-stack-twitter-clone/ab54bbfa71ae1b4aed197ad92c4a5391c790572e/architecture/Class%20Diagram.svg)

![Basic version](https://user-images.githubusercontent.com/57585087/129048076-a2b17cc9-3bc5-4447-baaa-14100f64aa03.png)
