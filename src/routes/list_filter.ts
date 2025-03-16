export function toSql(filter: string, param: string | undefined): string{
  if(filter=="none"){
    return `SELECT * FROM list ORDER BY ROWID DESC LIMIT ? OFFSET ?`;
  }else if(filter=="progress"){
    return `SELECT * FROM list
    WHERE (
      (time = 0 AND now < episode)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)
      OR
      (time != 0 AND ((((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode) AND now < episode)
    )
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }else if(filter=="onUpdate"){
    return `SELECT * FROM list
    WHERE (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }else if(filter=="updateDone"){
    return `SELECT * FROM list
    WHERE (
      (time = 0)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode)
    )
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }else if(filter=="watchDone"){
    return `SELECT * FROM list
    WHERE (
      (time = 0 AND now = episode)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode AND now = episode)
    )
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }else if(filter=="search"){
    return `SELECT * FROM list
    WHERE title LIKE '%${param}%'
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }else if(filter=="weekday"){
    return `SELECT * FROM list
    WHERE (
      strftime('%w', time / 1000, 'unixepoch', 'localtime') = '${param}'
      AND
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)
    )
    ORDER BY ROWID DESC
    LIMIT ? OFFSET ? `
  }
  return "";
}

export function calCount(filter: string, param: string | undefined) {
  if(filter=="none"){
    return `SELECT COUNT(*) as count FROM list`;
  }else if(filter=="progress"){
    return `SELECT COUNT(*) as count FROM list
    WHERE (
      (time = 0 AND now < episode)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)
      OR
      (time != 0 AND ((((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode) AND now < episode)
    )`
  }else if(filter=="onUpdate"){
    return `SELECT COUNT(*) as count FROM list
    WHERE (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)`
  }else if(filter=="updateDone"){
    return `SELECT COUNT(*) as count FROM list
    WHERE (
      (time = 0)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode)
    )`
  }else if(filter=="watchDone"){
    return `SELECT COUNT(*) as count FROM list
    WHERE (
      (time = 0 AND now = episode)
      OR
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) >= episode AND now = episode)
    )`
  }else if(filter=="search"){
    return `SELECT COUNT(*) as count FROM list
    WHERE title LIKE '%${param}%'`
  }else if(filter=="weekday"){
    return `SELECT COUNT(*) as count FROM list
    WHERE (
      strftime('%w', time / 1000, 'unixepoch', 'localtime') = '${param}'
      AND
      (time != 0 AND (((strftime('%s','now') * 1000) - time + 604800000 - 1) / 604800000) < episode)
    )`
  }
  return "";
}