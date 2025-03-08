import Database from "bun:sqlite";

export class User{
  checkInit(db: Database) {
    const rowCount = db
      .prepare("SELECT COUNT(*) AS count FROM user")
      .get() as { count: number };
    return rowCount.count === 0;
  }
}