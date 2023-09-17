import { f1drivers as _f1drivers } from "./f1drivers.js";
export { _f1drivers as f1drivers, };
export function initModels(sequelize) {
    const f1drivers = _f1drivers.initModel(sequelize);
    return {
        f1drivers: f1drivers,
    };
}
