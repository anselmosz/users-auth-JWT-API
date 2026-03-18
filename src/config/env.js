import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || "development"}`;

dotenv.config({
  path: path.resolve(process.cwd(), envFile)
});

export const env = process.env.NODE_ENV;

export const dbConfig = {
  client: process.env.DB_CLIENT || "mysql2",
  connection: {
    host: process.env.DATABASE_URL,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
      rejectUnauthorized: false
    },
  },
  pool: {
    min: 2,
    max: 10
  }
}

export const jwtConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN
}