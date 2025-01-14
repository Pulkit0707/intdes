import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:0AdjuIp3hUxs@ep-tiny-morning-a10iycgm.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  },
});
