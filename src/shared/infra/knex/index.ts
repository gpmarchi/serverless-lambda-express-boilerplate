import Knex from 'knex';

const knex = Knex({
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
  },
  pool: {
    min: parseInt(process.env.MIN_POOL_SIZE, 10) || 1,
    max: parseInt(process.env.MAX_POOL_SIZE, 10) || 1,
  },
  debug: process.env.DEBUG_DB.toLowerCase() === 'true',
  asyncStackTraces: process.env.DEBUG_DB.toLowerCase() === 'true',
});

export { knex };
