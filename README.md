## About this project

This project is a system sample implementing a like feature.
It is divided in three parts:

- Frontend: A React.js application showing a video gallery, a Like button,
and the total number of likes of a video in real time

- Backend: A Node.js application exposing an three API endpoints.

- Mongo Datasource: A MongoDB container used to store the videos data.

## First steps

In order to test and run this project and its modules there are a set of
libraries and dependencies you must have prior to execution, they are:

- Docker installed and running on local machine
- Node v6 installed
- Make sure you have the mongo container up and running. Bellow are the steps to run the Mongo container.

- Mongo Datasource: </br>
    1. cd backend folder
    2. There is a DockerFile to build a mongo container. Execute 'docker build -t mongo .'
    3. Run 'docker run -d -p 27017:27017 --name mongo mongo' (If you want to change port you must update the dev config file in backend application)
    4. Make sure the container is up and running by doing 'docker ps'

## How to test

- Frontend: <br/>
    1. cd frontend folder
    2. npm install (if not executed before)
    3. npm test

- Backend: <br/>
    P.S.: Prior to test this application you must to have the mongo container running
    1. cd backend folder
    2. npm install (if not executed before)
    3. npm test

## How to run

- Frontend: <br/>
    1. cd frontend folder
    2. npm install (if not executed before)
    2. npm start
    3. The application will be served in localhost port 3000, by default a browser window will be started

- Backend: <br/>
    P.S.: Prior to execute this application you must to have the mongo container running
    1. cd backend folder
    2. npm install (if not executed before)
    3. npm start
    4. The application will be running in localhost port 3030. If you want to change the port go to dev config file and change the appPort property
