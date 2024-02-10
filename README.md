# Usage Guide
- with your console navigate to Hido directory
- run `docker-compose up` command and wait for the containers to spin up
- to test the APIs , add the collections in the Github repo `/Postman Collections` to your postman environment
- for swagger docs goto `http://localhost:3001/docs` 
- call `http://localhost:3001/api/auth` GET method to generate jwt authorization bearer token
- the POST method `http://localhost:3001/api/cars/` requires Authorization , make sure to include the token generated from the previous step in the authorization header 
- to run node-tap tests , navigate to Hido directory from your console and run `npm run test` command

