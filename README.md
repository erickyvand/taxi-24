# TAXI-24 API
## How to use this API
This project was developed in NodeJs, in order to test it you have to follow these steps:
- Install `Node` if you don't have it in your computer
- Install `git` in your computer
- On your computer open terminal or CMD
- Run `git clone https://github.com/erickyvand/taxi-24.git` to get the project on your computer
- Run `cd taxi-24` to move to the location of the project
- Once your in `taxi-24` folder, run `npm install` to install packages  
- Install postgres database if you don't have it.
- Once installed create a database, the database name should be on your choice but you name your database `taxi` if you wish.
- Inside the project folder structure find `.en.example` file you will find `DATABASE_URL=postgres://database_username:database_password@host:5432/database_name`, replace `database_username` with your `postgres username`, `database_password` with your `postgres password` (Note: if your database does not required a password leave that place empty), `host` with `your host` and `database_name` with the `database you created`. 
- Remember in your terminal we are still in `taxi-24` folder
- Run `npm run db:migrate` to run migration and create tables in your database.
- Run `npm run db:seed` to insert data into your tables.