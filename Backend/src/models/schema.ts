import { connection } from "../config";

const tableSchema = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS urls CASCADE;

  CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name TEXT,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
  );
  CREATE TABLE urls (
    url_id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    description TEXT
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



