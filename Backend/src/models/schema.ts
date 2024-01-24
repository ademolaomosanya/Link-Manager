import { connection } from "../config";

const tableSchema = `
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name TEXT,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
  );
`;

connection.query(tableSchema, (err, results) => {
  if (err) {
    console.error("Error executing schema:", err);
    throw err;
  } else {
    console.log("Schema executed successfully");
  }
});
