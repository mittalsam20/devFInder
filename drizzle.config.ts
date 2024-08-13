import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    // url: process.env.DATABASE_URL!,
    url: "postgres://default:3uXWBdOl7rDC@ep-floral-paper-a18ujfii.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
  verbose: true,
  strict: true,
});
