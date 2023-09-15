import type { Sequelize } from "sequelize";
import { f1drivers as _f1drivers } from "./f1drivers.js";
import type { f1driversAttributes, f1driversCreationAttributes } from "./f1drivers.js";

export {
  _f1drivers as f1drivers,
};

export type {
  f1driversAttributes,
  f1driversCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const f1drivers = _f1drivers.initModel(sequelize);


  return {
    f1drivers: f1drivers,
  };
}
