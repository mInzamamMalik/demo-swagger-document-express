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



/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Perform email password login
 *     description: 
 *          user must have to have verified their email
 *          address before proceeding to login.
 *     parameters:
 *       - in: path
 *         name: carId
 *         required: true
 *         description: ID of the car to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 description: User's password 
 *     responses:
 *       200:
 *         description: Successful response with car details
 *         content:
 *           application/json:
 *             example:
 *               message: "login successful"
 *               errorCode: SUCCESS
 *               data:
 *                 _id: "657038baea3ba0f3f555a3c2"
 *                 profilePhoto: "https://abcurl.com/photoid"
 *                 firstName: "Malik"
 *                 lastName: "Inzamam"
 *                 email: "XXXXXXXXXXXXXXX"
 *                 phone: "XXXXXXXXXXXXXXX"
 * 
 */
app.post('/login', (req, res) => {
    res.send('Hello World!');
});



/**
 * @swagger
 * /api/v1/profile/{userId}:
 *   get:
 *     summary: Get profile of any user on platform
 *     description: 
 *          user must have to have verified their email
 *          address before proceeding to login.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 description: User's password 
 *     responses:
 *       200:
 *         description: Successful response with car details
 *         content:
 *           application/json:
 *             example:
 *               message: "login successful"
 *               errorCode: SUCCESS
 *               data:
 *                 _id: "657038baea3ba0f3f555a3c2"
 *                 profilePhoto: "https://abcurl.com/photoid"
 *                 firstName: "Malik"
 *                 lastName: "Inzamam"
 *                 email: "XXXXXXXXXXXXXXX"
 *                 phone: "XXXXXXXXXXXXXXX"
 *       404:
 *         description: User profile not found.
 *         content:
 *           application/json:
 *             example:
 *               message: "User profile not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error."
 * 
 */

app.get('/profile', (req, res, next) => {
    res.send('Hello World!');
})


// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});  