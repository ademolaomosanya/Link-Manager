import "dotenv/config";

export const env: ENVIRONMENT = process.env.ENVIRONMENT as ENVIRONMENT;

export interface ENVDETAILS {
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  port?: string;
}

export type ENVIRONMENT = "dev" | "prod" | "test";

export const envMap: Record<ENVIRONMENT, ENVDETAILS> = {
  dev: {
    DB_HOST: process.env.DB_HOST as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_NAME: process.env.DB_NAME as string,
    port: process.env.PORT,
  },
  test: {
    DB_HOST: process.env.DB_HOST as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_NAME: process.env.DB_NAME as string,
    port: process.env.PORT_TEST,
  },
  prod: {
    DB_HOST: process.env.DB_HOST as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_NAME: process.env.DB_NAME as string,
    port: process.env.PORT,
  },
};
