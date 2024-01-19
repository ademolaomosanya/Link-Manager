import express, { Router } from "express";
import mysql2 from "mysql2";
import "dotenv/config";

const app = express();

// connecting Database
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/users", (req, res) => {
  const jsonData = req.body;
  connection.query("INSERT INTO users SET ?", jsonData, (err, results) => {
    if (err) {
      console.error("Error inserting data into MySQL database:", err);
      res.status(500).json({ error: "Failed to insert data into database" });
      return;
    }
    res.status(200).json({ message: "Data inserted into MySQL database" });
  });
});

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
