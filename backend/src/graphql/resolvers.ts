import { Op } from 'sequelize'
import {sequelizeModels} from '../models/index.js'

export const Query = {
    getF1Drivers: (Driver:string) => {
        if(Driver){
            console.log("Driver Found",Driver)
            return sequelizeModels.f1drivers.findAll({where:{Driver:{[Op.substring]:Driver}}})
        }
        console.log("NO Driver", Driver)
        return sequelizeModels.f1drivers.findAll()
    }
}