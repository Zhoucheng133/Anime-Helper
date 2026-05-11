import { nanoid } from "nanoid";
import { existsSync, readFileSync, writeFileSync } from "fs";

const ENV_PATH = "db/.env";

let secrets = {
  ACCESS_SECRET: "",
  REFRESH_SECRET: ""
};

export function loadConfig() {
  if (!existsSync("db")) {
    const { mkdirSync } = require("fs");
    mkdirSync("db");
  }

  if (existsSync(ENV_PATH)) {
    const content = readFileSync(ENV_PATH, "utf-8");
    const lines = content.split("\n");
    lines.forEach(line => {
      const [key, val] = line.split("=");
      if (key === "ACCESS_SECRET") secrets.ACCESS_SECRET = val.trim();
      if (key === "REFRESH_SECRET") secrets.REFRESH_SECRET = val.trim();
    });
  }
  
  if (!secrets.ACCESS_SECRET || !secrets.REFRESH_SECRET) {
    updateSecrets();
  }
}

export function updateSecrets() {
  secrets.ACCESS_SECRET = nanoid(64);
  secrets.REFRESH_SECRET = nanoid(64);
  
  const content = `ACCESS_SECRET=${secrets.ACCESS_SECRET}\nREFRESH_SECRET=${secrets.REFRESH_SECRET}`;
  writeFileSync(ENV_PATH, content, "utf-8");
  console.log("⚠️ 全局密钥已重置并持久化，所有旧 Token 已失效。");
}

export const getAccessSecret = () => secrets.ACCESS_SECRET;
export const getRefreshSecret = () => secrets.REFRESH_SECRET;