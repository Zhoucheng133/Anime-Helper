let ACCESS_SECRET: string | null = null;
let REFRESH_SECRET: string | null = null;

export const setAccessSecret = (secret: string) => {
  ACCESS_SECRET = secret;
};

export const setRefreshSecret = (secret: string) => {
  REFRESH_SECRET = secret;
};

export const getAccessSecret = (): string => {
  if (!ACCESS_SECRET) throw new Error("ACCESS_SECRET 未设置");
  return ACCESS_SECRET;
};

export const getRefreshSecret = (): string => {
  if (!REFRESH_SECRET) throw new Error("REFRESH_SECRET 未设置");
  return REFRESH_SECRET;
};