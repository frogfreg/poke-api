import { default as sqlite3 } from "sqlite3";

const sqlite = sqlite3.verbose();

const db = new sqlite.Database("./pokemon.db", (error) => {
  if (error) {
    throw new Error(error);
  }

  console.log("Connected to sqlite database!");
});

export default db;
