import { ENVIRONMENT, envMap } from "./env.config";
import mysql2 from "mysql2";

const env: ENVIRONMENT = process.env.ENVIRONMENT as ENVIRONMENT;
const host = envMap[env].DB_HOST;
const user = envMap[env].DB_USER as string;
const password = envMap[env].DB_PASSWORD as string;
const database = envMap[env].DB_NAME as string;

export const connection = mysql2.createPool({
  host,
  user,
  password,
  database,
  connectionLimit: 10,
  multipleStatements: true // Enable multiple statements
});

