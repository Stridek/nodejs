# NodeAPI
### Getting started:  
git clone git@github.com:Stridek/NodeAPI.git  
Copy .env.example and rename to .env  
Setup a mongoDB account if you don't already have one.  

Edit contents of .env file for your environment  
PORT=3003
ENVIRONMENT=dev
DB_URL=mongodb+srv://username:password@cluster0.hgs87.mongodb.net/NodeAPI?retryWrites=true&w=majority
PANGEA_SELLER_URL=https://8000.xx.code.devsrvr.co
PANGEA_BUYER_URL=https://5000.xx.code.devsrvr.co
PANGEA_ORDER_URL=https://3002.xx.code.devsrvr.co

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
