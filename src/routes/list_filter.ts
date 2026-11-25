// 【filter】"none", "progress", "onUpdate", "updateDone", "watchDone", "unwatched"
// 【weekday】"-1"（没有更新周）, "0" - "6"（周日 - 周六）
// 【sort】"az", "za", "add_new_old", "add_old_new", "update_first", "update_end"
const releasedEpisodes = `(((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000)`;
const onUpdateCondition = `(time != 0 AND ${releasedEpisodes} < episode)`;

const filterConditions: Record<string, string> = {
  none: "",
  progress: `(
    (time = 0 AND now < episode)
    OR
    (time != 0 AND ${releasedEpisodes} < episode)
    OR
    (time != 0 AND ${releasedEpisodes} >= episode AND now < episode)
  )`,
  onUpdate: onUpdateCondition,
  updateDone: `(
    (time = 0)
    OR
    (time != 0 AND ${releasedEpisodes} >= episode)
  )`,
  watchDone: `(
    (time = 0 AND now = episode)
    OR
    (time != 0 AND ${releasedEpisodes} >= episode AND now = episode)
  )`,
  unwatched: `(
    (time = 0 AND now < episode)
    OR
    (time != 0
      AND ${releasedEpisodes} < episode
      AND now < ${releasedEpisodes}
    )
    OR
    (time != 0 AND ${releasedEpisodes} >= episode AND now < episode)
  )`,
};

interface Condition {
  where: string;
  params: string[];
}

export interface FilterSql {
  sql: string;
  params: string[];
}

function buildCondition(filter: string, keyword: string | undefined, weekday: string | undefined): Condition {
  const conditions: string[] = [];
  const params: string[] = [];

  const filterCondition = filterConditions[filter];
  if (filterCondition) {
    conditions.push(filterCondition);
  }

  if (keyword !== undefined && keyword !== "") {
    const escapedKeyword = keyword.replace(/[\\%_]/g, "\\$&");
    conditions.push(`title LIKE ? ESCAPE '\\'`);
    params.push(`%${escapedKeyword}%`);
  }

  if (weekday !== undefined && weekday !== "") {
    if (weekday === "-1") {
      conditions.push("(time = 0 OR time IS NULL)");
    } else {
      conditions.push(`(
        strftime('%w', time / 1000, 'unixepoch', 'localtime') = ?
        AND
        (
          ${onUpdateCondition}
          OR
          (time != 0 AND ${releasedEpisodes} = episode AND strftime('%w', 'now', 'localtime') = ?)
        )
      )`);
      params.push(weekday, weekday);
    }
  }

  return {
    where: conditions.length ? `WHERE ${conditions.map(condition => `(${condition})`).join(" AND ")}` : "",
    params,
  };
}

function orderBy(sort: string | undefined): string {
  switch (sort) {
    case "az":
      return "ORDER BY pinyin ASC";
    case "za":
      return "ORDER BY pinyin DESC";
    case "add_old_new":
      return "ORDER BY ROWID ASC";
    case "update_first":
      return `ORDER BY CASE WHEN ${onUpdateCondition} THEN 0 ELSE 1 END, ROWID DESC`;
    case "update_end":
      return `ORDER BY CASE WHEN ${onUpdateCondition} THEN 1 ELSE 0 END, ROWID DESC`;
    default:
      return "ORDER BY ROWID DESC";
  }
}

export function toSql(filter: string, keyword: string | undefined, weekday: string | undefined, sort: string | undefined): FilterSql {
  const { where, params } = buildCondition(filter, keyword, weekday);
  return {
    sql: `SELECT * FROM list ${where} ${orderBy(sort)} LIMIT ? OFFSET ?`,
    params,
  };
}

export function calCount(filter: string, keyword: string | undefined, weekday: string | undefined): FilterSql {
  const { where, params } = buildCondition(filter, keyword, weekday);
  return {
    sql: `SELECT COUNT(*) as count FROM list ${where}`,
    params,
  };
}
