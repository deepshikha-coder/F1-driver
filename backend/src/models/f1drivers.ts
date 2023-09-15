import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface f1driversAttributes {
  id?: string;
  Driver?: string;
  Nationality?: string;
  Seasons?: string;
  Championships?: string;
  Race_Entries?: string;
  Race_Starts?: string;
  Pole_Positions?: string;
  Race_Wins?: string;
  Podiums?: string;
  Fastest_Laps?: string;
  Points?: string;
  Active?: string;
  'Championship Years'?: string;
  Decade?: string;
  Pole_Rate?: string;
  Start_Rate?: string;
  Win_Rate?: string;
  Podium_Rate?: string;
  FastLap_Rate?: string;
  Points_Per_Entry?: string;
  Years_Active?: string;
  Champion?: string;
}

export type f1driversPk = "id";
export type f1driversId = f1drivers[f1driversPk];
export type f1driversOptionalAttributes = "id" | "Driver" | "Nationality" | "Seasons" | "Championships" | "Race_Entries" | "Race_Starts" | "Pole_Positions" | "Race_Wins" | "Podiums" | "Fastest_Laps" | "Points" | "Active" | "Championship Years" | "Decade" | "Pole_Rate" | "Start_Rate" | "Win_Rate" | "Podium_Rate" | "FastLap_Rate" | "Points_Per_Entry" | "Years_Active" | "Champion";
export type f1driversCreationAttributes = Optional<f1driversAttributes, f1driversOptionalAttributes>;

export class f1drivers extends Model<f1driversAttributes, f1driversCreationAttributes> implements f1driversAttributes {
  id?: string;
  Driver?: string;
  Nationality?: string;
  Seasons?: string;
  Championships?: string;
  Race_Entries?: string;
  Race_Starts?: string;
  Pole_Positions?: string;
  Race_Wins?: string;
  Podiums?: string;
  Fastest_Laps?: string;
  Points?: string;
  Active?: string;
  'Championship Years'?: string;
  Decade?: string;
  Pole_Rate?: string;
  Start_Rate?: string;
  Win_Rate?: string;
  Podium_Rate?: string;
  FastLap_Rate?: string;
  Points_Per_Entry?: string;
  Years_Active?: string;
  Champion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof f1drivers {
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
    Seasons: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Championships: {
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
    Decade: {
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
    },
    Champion: {
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
