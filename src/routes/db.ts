import Database from "bun:sqlite";

export function initDB(db: Database){
  initUserTable(db);
  initListTable(db);
  initDownloaderConfigTable(db);
  initDownloaderListTable(db);
  initDownloaderExcludeTable(db);
}

function initUserTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS user (
      id TEXT PRIMARY KEY,
      username TEXT,
      password TEXT
    )
  `).run()
}

function initListTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS list (
      id TEXT PRIMARY KEY,
      title TEXT,
      episode INTEGER,
      now INTEGER,
      time INTEGER
    )
  `).run()
}

function initDownloaderConfigTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_config (
      id TEXT PRIMARY KEY,
      link TEXT,
      username TEXT,
      secret TEXT,
      freq INTEGER,
      type TEXT,
      client TEXT
    )
  `).run()
}

function initDownloaderListTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_list (
      id TEXT PRIMARY KEY,
      title TEXT,
      ass TEXT
    )
  `).run()
}

function initDownloaderExcludeTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_exclude (
      id TEXT PRIMARY KEY,
      key TEXT
    )
  `).run()
}