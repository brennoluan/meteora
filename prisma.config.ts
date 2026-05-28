import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'ts-node prisma/seed.ts',
  },
  // Migrate/CLI must not use the transaction pooler (port 6543); use session/direct (5432).
  datasource: {
    url: process.env.DIRECT_URL!,
  },
});
