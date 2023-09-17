import { Sequelize } from 'sequelize';
import process from 'process';
import configs from '../../config/config.json' assert { type: "json" };
import { initModels } from './init-models.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import sqlite from 'sqlite3';
const env = process.env.NODE_ENV || 'development';
const config = configs[env];
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
console.log(sqlite.VERSION);
export const sequelizeModels = initModels(sequelize);
