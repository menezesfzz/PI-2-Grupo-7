import "dotenv/config";

export const env = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET!,
};
