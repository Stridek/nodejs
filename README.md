# NodeAPI
### Getting started:  

Copy .env.example and rename to .env  

Edit contents of .env file for your environment  
DON'T FORGET: change the username, password, and database name for the DB_URL.

Also edit the port here:
package.json scripts :8 and :9 (Also change the name in this file)
server.js :29
routes.js :3

npm install  

### To run the api (for developers):  
npm run dev  
If this doesn't work, you may need to install nodemon globally first:  
npm install -g nodemon  

### To run the orders api (for production):  
npm run start  

### Overview:  
The NodeAPI is a starter template. It uses NodeJS, ExpressJS, MongoDB, and Mongoose.  
SwaggerJS is used for documentation which is available here:  
http://localhost:3000api-docs/
