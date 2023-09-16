import { Op } from 'sequelize'
import { sequelizeModels } from '../models/index.js'

export const Query = {
    getF1Drivers: (parent, { driver, nationality, championships, decade, champion }: { driver: string, nationality: string, championships: string, decade: string, champion: string }) => {
        if (driver || nationality || championships || decade || champion) {
            console.log(driver)
            const result =  sequelizeModels.f1drivers.findAll({
                where: {
                    [Op.or]: [
                        { Driver: { [Op.eq]: driver } },
                        { Nationality: { [Op.eq]: nationality } },
                        { Championships: { [Op.eq]: championships } },
                        { Decade: { [Op.eq]: decade } },
                        { Champion: { [Op.eq]: champion } },
                    ]
                }
            })
            return result;
            console.log(result)
        }
        console.log(driver)
        return sequelizeModels.f1drivers.findAll()
    }
}