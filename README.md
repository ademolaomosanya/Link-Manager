# Link-Manager

| HTTP Method | API Endpoint       | Description                        | Body                                                                             |
| ----------- | ------------------ | ---------------------------------- | -------------------------------------------------------------------------------- |
| GET         | `/links`           | Get a list of all links.           |                                                                                  |
| GET         | `/links`           | Get a paginated list of all links. |                                                                                  |
| GET         | `/links/<link_id>` | Get a single link.                 |                                                                                  |
| POST        | `/links`           | Create a new link                  | `url` (required), `tags` (required), `description` (optional), `name` (required) |
| PUT         | `/links/<link_id>` | Update a link                      | `url` (required), `tags` (required), `description` (optional), `name` (required) |
| DELETE      | `/links/<link_id>` | Delete a link                      |                                                                                  |

## Additional Considerations

- **Validation and Error Handling:** Implement validation for input parameters and clear error messages.
- **Search and Filtering:** Add support for searching and filtering in the `GET /links` endpoint.
- **Versioning:** Consider versioning for future changes.

## How to Setup Nodejs-Typescript

### Install typescript

- Run the command to install the typescript package

```bash
npm install typescript --save-dev
```

- Run the command to initialize tsconfig.json - this file will contain your typescript settings more like typescript rules you want to allow/disallow for your project.

```bash
tsc --init
```

- Update the tsconfig.json file: specify the folder it will go to find the .ts file and tell it to exclude node_modules folder

```json
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
```

- Update the tsconfig.json file: Also specify the outDir value. Make sure to add `build` folder to gitignore

```json
{
  ...
  "outDir": "build",/* Specify an output folder for all emitted files. */
  ...
}
```

- Install ts-node - allow node to use typescript

```bash
npm install -D ts-node
npm install -D tslib @types/node
```

### Update Scripts

- First install `nodemon`

```bash
npm install -D nodemon
```

- Update the script

```json
  "scripts": {
    ...
    "start": "npm run build && node build/index.js",
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
    ...
  },
```

## Dependencies

### Dev Dependencies

1. [typescript](https://www.typescriptlang.org/download) - to make our javascript typed

2. [ts-node](https://www.npmjs.com/package/ts-node) - to run node with typescript

3. [nodemon](https://www.npmjs.com/package/nodemon) - for hot reloading

### Core Dependencies

1. [express](https://expressjs.com/)
2. [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js
3. [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
4. [dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file into process.env
5. [cors](https://www.npmjs.com/package/cors) - to enable CORS
