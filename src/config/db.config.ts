export function dbConfig(): any {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '205630',
    database: 'fcm',
    synchronize: true,
    autoLoadEntities: true,
    entities: ['src/**/entities/*.entity.js'],
  };
}
