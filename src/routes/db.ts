import Database from "bun:sqlite";

export function initDB(db: Database){
  initUserTable(db);
  initListTable(db);
}

function initUserTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS user (
      id TEXT KEY,
      username TEXT,
      password TEXT
    )
  `).run()
}

function initListTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS list (
      id TEXT KEY,
      title TEXT,
      episode INTEGER,
      now INTEGER,
      time INTEGER
    )
  `).run()
}