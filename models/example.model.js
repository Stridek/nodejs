const mongoose = require("mongoose")

/**
 * @swagger
 * components:
 *   schemas:
 *     Example:
 *       type: object
 *       properties:
 *         property_one:
 *           type: number
 *           unique: true
 *         property_two:
 *           type: array
 */

const ExampleSchema = new mongoose.Schema({
  property_one: {
    type: Number,
    unique: true
  },
  property_two: Array,
})

const Example = mongoose.model("Example", ExampleSchema)
module.exports = Example