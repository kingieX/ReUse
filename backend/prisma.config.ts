import dotenv from "dotenv";
import { defineConfig, env } from "prisma/config";

// Load .env early so env("...") inside prisma config can read variables
dotenv.config({ path: ".env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
