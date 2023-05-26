require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc');

// Only allow requests from these origin URLs (all others throw a CORS error)
app.use(
  cors({
    origin: [
      process.env.PANGEA_SELLER_URL, 
      process.env.PANGEA_BUYER_URL, 
      process.env.PANGEA_ORDER_URL
    ],
  })
)

// Use express middleware for json responses
app.use(express.json(), express.urlencoded({ extended: true }))

// Import routes/routes.js for use
const myRoutes = require('./routes/routes')
myRoutes(app)

// Connect to MongoDB database
mongoose
  .connect(`${process.env.DB_URL}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error)
})

// Use Swagger Documentation
const swaggerOptions = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Example API',
      version: '1.0.0',
      description: 'Express API for Example'
    },
  },
  apis: ['./routes/routes.js', './models/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
// Don't serve API docs on staging or production, only show on dev
if(process.env.ENVIRONMENT === 'dev') {
  app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerSpec, swaggerOptions)
  )  
}

// Start Express Server
const port = process.env.PORT || 3003 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
