import { DataTypes, Model } from 'sequelize';
export class f1drivers extends Model {
    static initModel(sequelize) {
        return f1drivers.init({
            id: {
                type: DataTypes.TEXT,
                allowNull: true,
                primaryKey: true
            },
            Driver: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Nationality: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Championships: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Decade: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Champion: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Seasons: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Race_Entries: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Race_Starts: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Pole_Positions: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Race_Wins: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Podiums: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Fastest_Laps: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Points: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Active: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            'Championship Years': {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Pole_Rate: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Start_Rate: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Win_Rate: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Podium_Rate: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            FastLap_Rate: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Points_Per_Entry: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            Years_Active: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'f1drivers',
            timestamps: false
        });
    }
}
