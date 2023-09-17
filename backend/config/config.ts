export const configs = {
  "development": {
    "dialect": "sqlite",
    "database": "main",
    "storage": "data/testdb.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "database": "main",
    "storage": "data/testdb.sqlite"
  },
  "production": {
    "dialect": "postgres",
    "use_env_variable": "POSTGRES_URL_NON_POOLING"
  }
}