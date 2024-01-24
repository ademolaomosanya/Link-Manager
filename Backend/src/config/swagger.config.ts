import swaggerJsdoc, { Options, SwaggerDefinition } from 'swagger-jsdoc';

const options: Options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Node/Express Backend Example API',
        version: '1.0.0',
        description: 'Add description for your API here',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./src/routes/*.ts'],
  };

export const specs = swaggerJsdoc(options);
