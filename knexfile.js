import "./src/config/env.js";

export default {
  // Configurações para desenvolvimento e testes com banco local
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DATABASE_URL,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  // Configurações de produção
  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DATABASE_URL,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      }
    },    
    pool: {
      min: 2,
      max: 10
    },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }
};
