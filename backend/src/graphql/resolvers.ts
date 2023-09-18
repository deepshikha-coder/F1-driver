import { Op } from 'sequelize'
import { sequelizeModels } from '../models/index.js'

export const Query = {
    getF1Drivers: (parent, { driver, nationality, championships, decade, champion }: { driver: string | null, nationality: string | null, championships: string | null, decade: string | null, champion: string | null }) => {
        if (driver || nationality || championships || decade || champion) {
            return sequelizeModels.f1drivers.findAll({
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
        }
        return sequelizeModels.f1drivers.findAll()
    }
}