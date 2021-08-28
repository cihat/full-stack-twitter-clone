# Full Stack Twitter Clone

In the project, I am doing it to develop myself on the back-end side. I spend my experience and effort to become a full-stack developer using Node.js and mongoDB.

In this project, I preferred Node.js in Back-end, mongoDB as Service, object document mapper (ODM) mongoose, Vue.js and pug in Front-end, SCSS for styling. I'm thinking of deploying my project to Google Cloud.

## Running the Twitter Clone

```sh
$ docker-compose up
```

# Running without Docker

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

The starter repository of this project has been forked from [dashersw/stack](https://github.com/dashersw/stack.)
