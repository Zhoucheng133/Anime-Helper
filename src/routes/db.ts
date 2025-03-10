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

function initDownloaderConfigTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_config (
      link TEXT,
      secret TEXT,
      freq INTEGER,
      type TEXT
    )
  `).run()
}

function initDownloaderListTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_list (
      id TEXT KEY,
      title TEXT,
      ass TEXT
    )
  `).run()
}

function initDownloaderExcludeTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS downloader_exclude (
      id TEXT KEY,
      value TEXT
    )
  `).run()
}