import Database from "bun:sqlite";
import pinyin from "pinyin";

export function initDB(db: Database){
  initUserTable(db);
  initListTable(db);
  initConfigTable(db);
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

function syncHistoryPinyin(db: Database) {
  const rows = db.prepare("SELECT id, title FROM list WHERE pinyin IS NULL OR pinyin = ''").all() as any[];
  
  if (rows.length === 0) return;
  const updateStmt = db.prepare("UPDATE list SET pinyin = ? WHERE id = ?");

  const updateTransaction = db.transaction((data: any[]) => {
    for (const row of data) {
      const pinyinArray = pinyin(
        row.title,
        {
          style: "normal",
          segment: "Intl.Segmenter"
        }
      ); 
      const pinyinResult = pinyinArray.flat().join("").toLowerCase().trim();
      updateStmt.run(pinyinResult, row.id);
    }
  });

  try {
    updateTransaction(rows);
  } catch (e) {
    console.error("同步历史拼音失败:", e);
  }
}

function initListTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS list (
      id TEXT PRIMARY KEY,
      title TEXT,
      episode INTEGER,
      now INTEGER,
      time INTEGER,
      bgmId TEXT,
      pinyin TEXT
    )
  `).run();
  
  const tableInfo = db.prepare("PRAGMA table_info(list)").all() as any[];
  const hasBgmId = tableInfo.some(column => column.name === 'bgmId');

  if (!hasBgmId) {
    try {
      db.prepare("ALTER TABLE list ADD COLUMN bgmId TEXT DEFAULT ''").run();
    } catch (_) {}
  }

  const hasPinyin = tableInfo.some(column => column.name === 'pinyin');
  if (!hasPinyin) {
    try {
      db.prepare("ALTER TABLE list ADD COLUMN pinyin TEXT DEFAULT ''").run();
    } catch (_) {}
  }
  syncHistoryPinyin(db);
}

function initConfigTable(db: Database){
  db.prepare(`
    CREATE TABLE IF NOT EXISTS config (
      id TEXT PRIMARY KEY,
      running INTEGER DEFAULT 0,
      saverunning INTEGER DEFAULT 1
    )
  `).run();

  const row = db.prepare(`SELECT * FROM config WHERE id = '0'`).get();
  if (!row) {
    db.prepare(`INSERT INTO config (id, running, saverunning) VALUES ('0', 0, 1)`).run();
  }
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