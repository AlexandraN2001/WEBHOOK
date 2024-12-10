// Import the necessary dependencies
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Create the Express application
const app = express();
const PORT = 3000;

// Use body-parser to parse incoming JSON requests
app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Webhook API',
            description: 'API documentation for the Webhook application',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./index.js'],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Use Swagger UI to serve API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Receive a webhook
 *     description: Receive POST requests at the /webhook endpoint
 *     requestBody:
 *       description: Webhook request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello from JS, made by Alexandra"
 *     responses:
 *       200:
 *         description: Webhook processed successfully
 */
app.post('/webhook', (req, res) => {
    console.log('Webhook received');
    console.log('Data:', req.body);
    console.log('Message: Hello from JS, made by Alexandra');

    res.status(200).send('Webhook processed successfully - Hello from JS, made by Alexandra');
});

// Add a root GET route
app.get('/', (req, res) => {
    res.send('Hello! The server is running.');
});

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});