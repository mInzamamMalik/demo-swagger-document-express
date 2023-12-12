import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'API documentation for your Express.js server',
        },
    },
    apis: ['*.mjs'], // Specify the path to your route files
};

export const specs = swaggerJsdoc(options);