export default {
  development: {
    username: 'user', // ← Usuario de la DB
    password: 'pass', // ← Contraseña del usuario de la DB
    database: 'telemetry', // ← Nombre de la DB previamente creada
    dialect: 'sqlite',
    host: './dev.sqlite'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'sqlite'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
};
