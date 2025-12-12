let JWT_SECRET: string | null = null;

export const setJwtSecret = (secret: string) => {
  JWT_SECRET = secret;
};

export const getJwtSecret = (): string => {
  if (!JWT_SECRET) throw new Error('JWT secret 未设置！');
  return JWT_SECRET;
};