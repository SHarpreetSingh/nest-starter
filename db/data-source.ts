import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'pg_db',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  logging: true,
  synchronize: true,
};

const dataSource = new DataSource(typeOrmConfig);

export default dataSource;
