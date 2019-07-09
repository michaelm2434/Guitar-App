# Guitar-App

git clone repository

then npm install

cd into client folder and do npm install there too.

uses sequelize and postgres. 

database config is in config/config where you'll see:

{
  "development": {
    "username": "postgres",
    "password": "",
    "database": "guitarapp",
    "host": "127.0.0.1",
    "dialect": "postgresql",
    "port": 5432
  },
  ...
}

Once you have postgres going, create a db called "guitarapp" then do sequelize db:migrate.
Then do sequelize db:seed:all.

To run the app:
  In base folder do "PORT=3001 npm start", this will start the server on port 3001
  In another terminal cd to client folder and do "npm start" which will start the react app on port 3000.
  Since the client folder package.json has a proxy to port 3001, we have a connection between the frontend and backend.
  App should now be usable.
