import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { dbConfigFactory } from './src/config/db.config';

config();

export default new DataSource({
  ...dbConfigFactory().postgres,
  type: 'postgres',
  entities: ['./src/**/*.entity.ts'],
  migrations: ['./migrations/*.ts'],
  logging: true,
  migrationsTableName: 'typeorm_migrations',
});
