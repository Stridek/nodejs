const ExampleController = require('../controllers/example.controller')

// View route documentation at https://3003.xx.code.devsrvr.co/api-docs where xx are your initials
module.exports = (app) => {
    // ====== Example Routes ====== //

    /**
     * @swagger
     * /v1/examples/create:
     *   post:
     *     summary: Create a new example
     *     tags:
     *       - Examples
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Example'
     */
    app.post('/v1/examples/create', ExampleController.createExample);

    /**
     * @swagger
     * /v1/examples/{property_one}:
     *   get:
     *     summary: Get a specific example by property_one value
     *     tags:
     *       - Examples
     *     parameters:
     *       - name: property_one
     *         in: path
     *         required: true
     *         schema:
     *           type: number
     */
    app.get('/v1/examples/:property_one', ExampleController.findOneExample);

    /**
     * @swagger
     * /v1/examples/find-many/{property_one}:
     *   get:
     *     summary: Find examples by property_one value
     *     tags:
     *       - Examples
     *     parameters:
     *       - name: property_one
     *         in: path
     *         required: true
     *         schema:
     *           type: number
     */
    app.get('/v1/examples/find-many/:property_one', ExampleController.findManyExamples);

    /**
     * @swagger
     * /v1/examples/delete/{property_one}:
     *   delete:
     *     summary: Delete an example by property_one value
     *     tags:
     *       - Examples
     *     parameters:
     *       - name: property_one
     *         in: path
     *         required: true
     *         schema:
     *           type: number
     */
    app.delete('/v1/examples/delete/:property_one', ExampleController.deleteExample);


    // ====== Example 2 Routes ====== //
    // ====== Example 3 Routes ====== //
}

