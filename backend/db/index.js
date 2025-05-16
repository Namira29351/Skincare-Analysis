// First, we're importing a helpful tool called 'pg' (think of it as a Swiss Army knife for working with PostgreSQL databases)
import pg from "pg";
const { Pool } = pg;

const pool = new Pool();

export const query = (text, params, callback) => {
  // console.log("Hello from your yelp db!");
  return pool.query(text, params, callback);
};