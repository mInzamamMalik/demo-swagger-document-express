import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './swaggerConfig.mjs';

const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!');
});

/**
 * @swagger
 * /example:
 *   get:
 *     description: Get an example resource
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get('/example', (req, res) => {
    res.send('Hello World!');
});


// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});  