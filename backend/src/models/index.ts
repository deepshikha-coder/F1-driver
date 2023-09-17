import {Sequelize} from 'sequelize'
import process from 'process'
import {configs} from '../../config/config.js'
import { initModels } from './init-models.js'
import pg from './test.cjs'

console.log(pg)

const env = process.env.NODE_ENV || 'development';
const config = configs[env];
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
export const sequelizeModels = initModels(sequelize);
