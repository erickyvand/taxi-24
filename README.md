# TAXI-24 API
## How to get started with this API
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
- Run `npm run pretest` to run migration and create tables in your database and insert data into your tables.

## How to test the functionality
- Install Postman if you don't have it
- Open your terminal or CMD navigate to the project folder and run `npm run dev-server` to start the server.
- Once the server started it will listen on port 3000.
- Open postman and start testing the functionalities of the endpoints.

## List of endpoints
- /GET `/api/drivers`: this endpoint get all drivers. use `/api/drivers?page=pageNumber&limit=limit` for pagination. Example: `/api/drivers?page=1&limit=5`
- /GET `/api/drivers/available`: this endpoint get all available drivers. Check the first endpoint to see how you use pagination.
- /GET `/api/drivers/:locationId/available`: This endpoint get a list of available endpoint for a specific location within 3km.
- /GET `/api/drivers/:driverId`: This endpoint get a specific driver.
- /POST `/api/trips`: this endpoint create a new trip request and assign a driver to a rider.
- /PATCH `/api/trips/:tripId/complete`: this endpoint complete a trip and generate an invoice.
- /GET `/api/trips/active`: This enpoint get all active trips.
- /GET `/api/riders`: This endpoint get all riders.
- /GET `/api/trips/:tripId/invoice`: this endpoint get an invoice.
- /GET `/api/riders/:riderId`: this endpoint get a specific rider.
- /GET `/api/riders/:riderId/drivers`: this endpoint get a list of drivers for a specific rider.

Note: You can run `npm test` to check the test coverage.